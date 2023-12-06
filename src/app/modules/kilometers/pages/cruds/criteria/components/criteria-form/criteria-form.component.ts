import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criterio } from '@app/core/models/criterio';
import { CrudString } from '@app/core/types/crud';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-criteria-form',
  templateUrl: './criteria-form.component.html',
  styleUrls: ['./criteria-form.component.css'],
})

export class CriteriaFormComponent implements OnChanges {
  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'

  formCriterio: FormGroup = this.fb.group({
    nombre: [null, Validators.required],
    campo: [null, Validators.required],
  })

  @Input() criterio: Criterio | null = null
  @Input() type: CrudString = this.CREATE
  @Input() reset: boolean = false

  @Output() onCreate = new EventEmitter<Criterio>()
  @Output() onEdit = new EventEmitter<Criterio>()

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reset']?.currentValue) this.formCriterio.reset()
    if (changes['criterio']) {
      this.formCriterio.get('nombre')?.setValue(this.criterio?.nombre)
      this.formCriterio.get('campo')?.setValue(this.criterio?.campo)
    }
  }

  validatedForm() {
    const nombreError = this.formCriterio.get('nombre')?.errors
    const campoError = this.formCriterio.get('campo')?.errors
    if (nombreError || campoError) {
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
    if (!this.validatedForm()) {
      this.reset = false
      return
    }
    this.reset = true
    if (this.type === this.CREATE) {
      this.onCreate.emit(this.formCriterio.value)
      return
    }
    if ( this.type === this.UPDATE) {
      this.onEdit.emit({
        id: this.criterio?.id,
        ...this.formCriterio.value
      })
      return
    }
  }



}
