import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Itinerary } from '@app/core/models/itinerary';
import { CrudString } from '@app/core/types/crud';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-itinerary-form',
  templateUrl: './itinerary-form.component.html',
  styleUrls: ['./itinerary-form.component.css']
})
export class ItineraryFormComponent implements OnChanges{
  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'

  formItinerary: FormGroup = this.fb.group({
    nombre: [null, Validators.required]
  })

  @Input() itinerary: Itinerary | null = null
  @Input() type: CrudString = this.CREATE
  @Input() reset: boolean = false

  @Output() onCreate = new EventEmitter<Itinerary>()
  @Output() onEdit = new EventEmitter<Itinerary>()

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reset']?.currentValue) this.formItinerary.reset()
    if(changes['itinerary']) {
      this.formItinerary.get('nombre')?.setValue(this.itinerary?.nombre)
    }
  }

  validatedForm() {
    const nombreError = this.formItinerary.get('nombre')?.errors
    if (nombreError) {
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
    if(this.type === this.CREATE) {
      this.onCreate.emit(this.formItinerary.value)
      return
    }
    if (this.type === this.UPDATE) {
      this.onEdit.emit({
        id: this.itinerary?.id,
        ...this.formItinerary.value
      })
      return
    }
  }
}
