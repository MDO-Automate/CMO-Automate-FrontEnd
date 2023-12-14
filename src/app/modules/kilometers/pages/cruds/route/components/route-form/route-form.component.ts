import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Itinerary } from '@app/core/models/itinerary';
import { Route, RouteResponse } from '@app/core/models/routes';
import { CrudString } from '@app/core/types/crud';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css'],
})
export class RouteFormComponent implements OnChanges, OnInit {
  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'

  defaultValueKmIt: number = 0
  defaultValueItiSel: number = 7

  formRoute: FormGroup = this.fb.group({
    nombre: [null, Validators.required],
    kmItinerario1: [null, Validators.required],
    kmItinerarioRepro1: [null, Validators.required],
    kmItinerario2: [null, Validators.required],
    kmItinerarioRepro2: [null, Validators.required],
    kmItinerario3: [null, Validators.required],
    kmItinerarioRepro3: [null, Validators.required],
    kmItinerario4: [null, Validators.required],
    kmItinerarioRepro4: [null, Validators.required],
    inicioHabil: [null, Validators.required],
    inicioSabado: [null, Validators.required],
    inicioDomingo: [null, Validators.required],
    finHabil: [null, Validators.required],
    finSabado: [null, Validators.required],
    finDomingo: [null, Validators.required],
    itinerario1: [null, Validators.required],
    itinerario2: [null, Validators.required],
    itinerario3: [null, Validators.required],
    itinerario4: [null, Validators.required],
  })

  @Input() route: RouteResponse | null = null
  @Input() type: CrudString = this.CREATE
  @Input() itineraries: Itinerary[] = []
  @Input() reset: boolean = false

  @Output() onCreate = new EventEmitter<Route>()
  @Output() onEdit = new EventEmitter<Route>()
  @Output() onChargeFormEmit = new EventEmitter<() => void>()

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.onChargeForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reset']?.currentValue) {
      this.formRoute.reset()
      this.onChargeForm()
    }

    if (changes['route']) {
      this.formRoute.get('nombre')?.setValue(this.route?.nombre)
      this.formRoute.get('kmItinerario1')?.setValue(this.route?.kmItinerario1)
      this.formRoute.get('kmItinerarioRepro1')?.setValue(this.route?.kmItinerarioRepro1)
      this.formRoute.get('kmItinerario2')?.setValue(this.route?.kmItinerario2)
      this.formRoute.get('kmItinerarioRepro2')?.setValue(this.route?.kmItinerarioRepro2)
      this.formRoute.get('kmItinerario3')?.setValue(this.route?.kmItinerario3)
      this.formRoute.get('kmItinerarioRepro3')?.setValue(this.route?.kmItinerarioRepro3)
      this.formRoute.get('kmItinerario4')?.setValue(this.route?.kmItinerario4)
      this.formRoute.get('kmItinerarioRepro4')?.setValue(this.route?.kmItinerarioRepro4)
      this.formRoute.get('inicioHabil')?.setValue(this.route?.inicioHabil)
      this.formRoute.get('inicioSabado')?.setValue(this.route?.inicioSabado)
      this.formRoute.get('inicioDomingo')?.setValue(this.route?.inicioDomingo)
      this.formRoute.get('finHabil')?.setValue(this.route?.finHabil)
      this.formRoute.get('finSabado')?.setValue(this.route?.finSabado)
      this.formRoute.get('finDomingo')?.setValue(this.route?.finDomingo)
      this.formRoute.get('itinerario1')?.setValue(this.route?.itinerario1.id)
      this.formRoute.get('itinerario2')?.setValue(this.route?.itinerario2.id)
      this.formRoute.get('itinerario3')?.setValue(this.route?.itinerario3.id)
      this.formRoute.get('itinerario4')?.setValue(this.route?.itinerario4.id)
    }
  }

  validatedForm() {
    const nombreError = this.formRoute.get('nombre')?.errors
    const kmItinerario1Error = this.formRoute.get('kmItinerario1')?.errors
    const kmItinerarioRepro1Error = this.formRoute.get('kmItinerarioRepro1')?.errors
    const kmItinerario2Error = this.formRoute.get('kmItinerario2')?.errors
    const kmItinerarioRepro2Error = this.formRoute.get('kmItinerarioRepro2')?.errors
    const kmItinerario3Error = this.formRoute.get('kmItinerario3')?.errors
    const kmItinerarioRepro3Error = this.formRoute.get('kmItinerarioRepro3')?.errors
    const kmItinerario4Error = this.formRoute.get('kmItinerario4')?.errors
    const kmItinerarioRepro4Error = this.formRoute.get('kmItinerarioRepro4')?.errors
    const inicioHabilError = this.formRoute.get('inicioHabil')?.errors
    const inicioSabadoError = this.formRoute.get('inicioSabado')?.errors
    const inicioDomingoError = this.formRoute.get('inicioDomingo')?.errors
    const finHabilError = this.formRoute.get('finHabil')?.errors
    const finSabadoError = this.formRoute.get('finSabado')?.errors
    const finDomingoError = this.formRoute.get('finDomingo')?.errors
    const itinerario1Error = this.formRoute.get('itinerario1')?.errors
    const itinerario2Error = this.formRoute.get('itinerario2')?.errors
    const itinerario3Error = this.formRoute.get('itinerario3')?.errors
    const itinerario4Error = this.formRoute.get('itinerario4')?.errors

    if( nombreError || kmItinerario1Error  || kmItinerarioRepro1Error || kmItinerario2Error || kmItinerarioRepro2Error || kmItinerario3Error || kmItinerarioRepro3Error || kmItinerario4Error || kmItinerarioRepro4Error || inicioHabilError || inicioSabadoError || inicioDomingoError || finHabilError || finSabadoError || finDomingoError || itinerario1Error || itinerario2Error || itinerario3Error || itinerario4Error ) {
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


  onChargeForm() {
      this.formRoute.get('kmItinerario1')?.setValue(0)
      this.formRoute.get('kmItinerarioRepro1')?.setValue(0)
      this.formRoute.get('kmItinerario2')?.setValue(0)
      this.formRoute.get('kmItinerarioRepro2')?.setValue(0)
      this.formRoute.get('kmItinerario3')?.setValue(0)
      this.formRoute.get('kmItinerarioRepro3')?.setValue(0)
      this.formRoute.get('kmItinerario4')?.setValue(0)
      this.formRoute.get('kmItinerarioRepro4')?.setValue(0)
      this.formRoute.get('itinerario1')?.setValue(7)
      this.formRoute.get('itinerario2')?.setValue(7)
      this.formRoute.get('itinerario3')?.setValue(7)
      this.formRoute.get('itinerario4')?.setValue(7)
  }


  submit(){
    if (!this.validatedForm()) {
      this.reset = false
      return
    }

    this.reset = true
    this.onChargeForm()

    if (this.type === this.CREATE) {
      this.onCreate.emit(this.formRoute.value)
      return
    }
    if (this.type === this.UPDATE) {
      this.onEdit.emit({
        id: this.route?.id,
        ...this.formRoute.value
      })
      return
    }
  }



}
