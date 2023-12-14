import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KmIncident } from '@app/core/models/km-incident';
import { CrudString } from '@app/core/types/crud';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-km-incident-form',
  templateUrl: './km-incident-form.component.html',
  styleUrls: ['./km-incident-form.component.css'],
})
export class KmIncidentFormComponent implements OnChanges {
  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'

  formKmIncident: FormGroup = this.fb.group({
    nombre: [null, Validators.required]
  })

  @Input() kmIncident: KmIncident | null = null
  @Input() type: CrudString = this.CREATE
  @Input() reset: boolean = false

  @Output() onCreate = new EventEmitter<KmIncident>()
  @Output() onEdit = new EventEmitter<KmIncident>()

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['reset']?.currentValue) this.formKmIncident.reset()
    if (changes['kmIncident']) {
      this.formKmIncident.get('nombre')?.setValue(this.kmIncident?.nombre)
    }
  }

  validatedForm() {
    const nombreError = this.formKmIncident.get('nombre')?.errors

    if (nombreError) {
      this.messageService.add({
        severity: 'error',
        summary: 'Ha ocurrido un error',
        detail: 'Hay campos vacíos'
      })
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
      this.onCreate.emit(this.formKmIncident.value)
      return
    }
    if (this.type === this.UPDATE) {
      this.onEdit.emit({
        id:this.kmIncident?.id,
        ...this.formKmIncident.value

      })
      return
    }
  }
}
