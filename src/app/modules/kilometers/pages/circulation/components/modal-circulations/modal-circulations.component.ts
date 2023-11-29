import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Circulation } from '@app/core/models/circulation';
import { Routes } from '@app/core/models/routes';
import { CirculationsService } from '@app/modules/kilometers/services/circulations.service';
import { RoutesService } from '@app/modules/kilometers/services/routes.service';
import { MessageService } from 'primeng/api';





@Component({
  selector: 'app-modal-circulations',
  templateUrl: './modal-circulations.component.html',
  styleUrls: ['./modal-circulations.component.css'],
})
export class ModalCirculationsComponent implements OnInit, OnChanges {
  CREATE:'Create' = 'Create'
  UPDATE:'Update' = 'Update'

  @Input() circulation: Circulation | null = null
  @Input() visible: boolean = false
  @Input() title: string = ''
  @Input() type: 'Update' | 'Create' = this.CREATE
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter()
  @Output() close: EventEmitter<boolean> = new EventEmitter()

  formCirculation: FormGroup = this.fb.group({
    circulacion: [null, Validators.required],
    linea: [null, Validators.required]
  })

  lines: Routes[] = []

  constructor(
    private fb: FormBuilder,
    private linesService: RoutesService,
    private circulationsService: CirculationsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.linesService.getAll()
      .subscribe({
        next: (data) => this.lines = data,
        error: (error) => console.log(error)
      })
      console.log(this.circulation);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['circulation']) {
      console.log(this.circulation?.linea)
      this.formCirculation.get('circulacion')?.setValue(this.circulation?.circulacion)
      this.formCirculation.get('linea')?.setValue(this.circulation?.linea.id)
    }

  }

  onClosedModal() {
    this.close.emit(true)
  }

  validatedForm() {
    const circulationError = this.formCirculation.get('circulacion')?.errors
    const lineError = this.formCirculation.get('linea')?.errors

    if (circulationError || lineError) {
      this.showAlert('error', 'Ha ocurrido un error', 'Hay campos vacíos')
      return false
    }
    return true

  }

  createCirculation() {
    this.circulationsService.create(this.formCirculation.value)
      .subscribe({
        next: (data) => {
          this.showAlert('success', 'Excelente! :)', 'Se ha guardado la información exitosamente'),
          this.visible = false
        },
        error: (error) => {
          console.log(error);

          this.showAlert('error', 'Ha ocurrido un error', error.error.message)
        }
      })
    }

  updateCirculation(id:number) {
    this.circulationsService.update(id, this.formCirculation.value)
      .subscribe({
        next: (data) => {
          this.showAlert('success', 'Excelente! :)', 'Se ha actualizado la información exitosamente'),
          this.visible = false
        },
        error: (error) => {
          console.log(error);

          this.showAlert('error', 'Ha ocurrido un error', error.error.message)
        }
      })
    }


  submit() {
    if (!this.validatedForm()) return
    this.onSubmit.emit(true)
    if (this.type === this.CREATE) {
      this.createCirculation()
      return
    }
    if (this.type === this.UPDATE) {
      this.updateCirculation(this.circulation?.id || 0)
      return
    }
  }



  showAlert(status: string, title: string, message: string) {
    this.messageService.add({ severity: status, summary: title, detail: message });
  }
}
