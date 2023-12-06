import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Holiday } from '@app/core/models/holiday';
import { CrudString } from '@app/core/types/crud';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.css'],
})
export class HolidayFormComponent implements OnChanges{
  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'

  formHoliday: FormGroup = this.fb.group({
    fecha: [null, Validators.required],
    nombre: [null, Validators.required]
  })

  @Input() holiday: Holiday | null = null
  @Input() type: CrudString = this.CREATE
  @Input() reset: boolean = false

  @Output() onCreate = new EventEmitter<Holiday>()
  @Output() onEdit = new EventEmitter<Holiday>()

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['reset']?.currentValue) this.formHoliday.reset()
    if (changes['holiday']) {
      this.formHoliday.get('fecha')?.setValue(this.holiday?.fecha)
      this.formHoliday.get('nombre')?.setValue(this.holiday?.nombre)
    }
  }

  validatedForm() {
    const fechaError = this.formHoliday.get('fecha')?.errors
    const nombreError = this.formHoliday.get('nombre')?.errors

    if (fechaError || nombreError) {
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
    console.log(this.formHoliday.value);

    if (!this.validatedForm()) {
      this.reset = false
      return
    }
    this.reset = true
    if (this.type === this.CREATE) {
      this.onCreate.emit(this.formHoliday.value)
      return
    }
    if (this.type === this.UPDATE) {
      this.onEdit.emit(this.formHoliday.value)
      return
    }
  }

}
