import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Itinerary } from '@app/core/models/itinerary';
import { Route, RouteResponse } from '@app/core/models/routes';
import { SchedulesItinerary, SchedulesItineraryResponse } from '@app/core/models/schedulesItinerary';
import { CrudString } from '@app/core/types/crud';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-schedules-itinerary-form',
  templateUrl: './schedules-itinerary-form.component.html',
  styleUrls: ['./schedules-itinerary-form.component.css']
})
export class SchedulesItineraryFormComponent implements OnChanges {

  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'
  optionsWay = ['INT - CAB', 'CAB - INT', 'CIRCULAR', 'N/A']

  formSchedulesItinerary: FormGroup = this.fb.group({
    linea: [null, Validators.required],
    itinerario: [null, Validators.required],
    sentido: [null, Validators.required],
    lvInicio: [null, Validators.required],
    lvFin: [null, Validators.required],
    sInicio: [null, Validators.required],
    sFin: [null, Validators.required],
    dInicio: [null, Validators.required],
    dFin: [null, Validators.required]
  })

  @Input() schedulesItinerary: SchedulesItineraryResponse | null = null
  @Input() type: CrudString = this.CREATE
  @Input() lines: RouteResponse[] = []
  @Input() itineraries: Itinerary[] = []
  @Input() reset: boolean = false

  @Output() onCreate = new EventEmitter<SchedulesItinerary>()
  @Output() onEdit = new EventEmitter<SchedulesItinerary>()

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reset']?.currentValue) this.formSchedulesItinerary.reset()
    if (changes['schedulesItinerary']) {
      this.formSchedulesItinerary.get('linea')?.setValue(this.schedulesItinerary?.linea.id)
      this.formSchedulesItinerary.get('itinerario')?.setValue(this.schedulesItinerary?.itinerario.id)
      this.formSchedulesItinerary.get('sentido')?.setValue(this.schedulesItinerary?.sentido)
      this.formSchedulesItinerary.get('lvInicio')?.setValue(this.schedulesItinerary?.lvInicio)
      this.formSchedulesItinerary.get('lvFin')?.setValue(this.schedulesItinerary?.lvFin)
      this.formSchedulesItinerary.get('sInicio')?.setValue(this.schedulesItinerary?.sInicio)
      this.formSchedulesItinerary.get('sFin')?.setValue(this.schedulesItinerary?.sFin)
      this.formSchedulesItinerary.get('dInicio')?.setValue(this.schedulesItinerary?.dInicio)
      this.formSchedulesItinerary.get('dFin')?.setValue(this.schedulesItinerary?.dFin)
    }
  }


  validatedForm() {
    const lineError = this.formSchedulesItinerary.get('linea')?.errors
    const itineraryError = this.formSchedulesItinerary.get('itinerario')?.errors
    const wayError = this.formSchedulesItinerary.get('sentido')?.errors
    const lvStartError = this.formSchedulesItinerary.get('lvInicio')?.errors
    const lvEndError = this.formSchedulesItinerary.get('lvFin')?.errors
    const sStartError = this.formSchedulesItinerary.get('sInicio')?.errors
    const sEndError = this.formSchedulesItinerary.get('sFin')?.errors
    const dStartError = this.formSchedulesItinerary.get('dInicio')?.errors
    const dEndError = this.formSchedulesItinerary.get('dFin')?.errors

    if (itineraryError || lineError || wayError || lvStartError || lvEndError || sStartError || sEndError || dStartError || dEndError  ) {
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
      this.onCreate.emit(this.formSchedulesItinerary.value)
      return
    }
    if (this.type === this.UPDATE) {
      this.onEdit.emit({
        id: this.schedulesItinerary?.id,
        ...this.formSchedulesItinerary.value
      })
      return
    }
  }



}
