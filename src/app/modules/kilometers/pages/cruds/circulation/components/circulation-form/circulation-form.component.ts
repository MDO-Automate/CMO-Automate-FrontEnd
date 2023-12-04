import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes } from '@app/core/models/routes';

import { Circulation, CirculationResponse } from '@app/core/models/circulation';
import { CrudString } from '@app/core/types/crud';

import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-circulation-form',
  templateUrl: './circulation-form.component.html',
  styleUrls: ['./circulation-form.component.css'],
})
export class CirculationFormComponent implements OnChanges {
  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'

  formCirculation: FormGroup = this.fb.group({
    circulacion: [null, Validators.required],
    linea: [null, Validators.required]
  })

  @Input() circulation: CirculationResponse | null = null
  @Input() type: CrudString = this.CREATE
  @Input() lines: Routes[] = []
  @Input() reset: boolean = false

  @Output() onCreate = new EventEmitter<Circulation>()
  @Output() onEdit = new EventEmitter<Circulation>()

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['reset']?.currentValue) this.formCirculation.reset() 
    if (changes['circulation']) {
      this.formCirculation.get('circulacion')?.setValue(this.circulation?.circulacion)
      this.formCirculation.get('linea')?.setValue(this.circulation?.linea.id)
    }
  }

  validatedForm() {
    const circulationError = this.formCirculation.get('circulacion')?.errors
    const lineError = this.formCirculation.get('linea')?.errors

    if (circulationError || lineError) {
      this.messageService.add(
        { 
          severity: 'error', 
          summary: 'Ha ocurrido un error', 
          detail: 'Hay campos vacíos' 
        }
      )
      return false
    }
    return true
  }

  submit() {
    if (!this.validatedForm()) return
    if (this.type === this.CREATE) {
      this.onCreate.emit(this.formCirculation.value)
      return
    }
    if (this.type === this.UPDATE) {
      this.onEdit.emit({ 
        id: this.circulation?.id, 
        ...this.formCirculation.value 
      })
      return
    }
  }
}
