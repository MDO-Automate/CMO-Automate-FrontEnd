import { Component, OnInit } from '@angular/core';
import { Itinerary } from '@app/core/models/itinerary';
import { CrudAlertString, CrudString } from '@app/core/types/crud';
import { MessageService } from 'primeng/api';
import { ItinerariesService } from '../../../services/itineraries.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'],
})
export class ItineraryComponent implements OnInit{

  modalVisible = false
  itinerariesTable: Itinerary[] = []
  itinerary: Itinerary | null = null
  typeForm: CrudString = 'Create'
  resetForm = false

  constructor(
    private messageService: MessageService,
    private itinerariesService: ItinerariesService
  ) {}

  ngOnInit(): void {
    this.getItineraries()
  }

  getItineraries() {
    this.itinerariesService.getAll()
      .subscribe({
        next: (data) => this.itinerariesTable = data,
        error: (error) => console.log(error)
      })
  }

  onButtonCreate() {
    this.typeForm = 'Create'
    this.resetForm = false
    this.modalVisible = true
    this.itinerary = null
  }

  onItemEdit(item: Itinerary) {
    this.typeForm = 'Update'
    this.modalVisible = true
    this.itinerary = this.itinerariesTable.find((i) => i.id === item.id) || null
  }

  createItinerary(itinerary: Itinerary) {
    this.itinerariesService
      .create(itinerary)
      .subscribe(this.handlerResponseCrud('guardado'))
  }

  updateItinerary(itinerary: Itinerary) {
    const {id} = itinerary
    delete itinerary.id
    this.itinerariesService
      .update(id || 0, itinerary)
      .subscribe(this.handlerResponseCrud('actualizado'))
  }

  deleteItinerary(itinerary: Itinerary) {
      this.itinerariesService
      .delete(itinerary?.id || 0)
      .subscribe(this.handlerResponseCrud('eliminado'))
  }

  showAlert(status: string, title: string, message: string) {
    this.messageService.add({
      severity: status,
      summary: title,
      detail: message
    })
  }

  handlerResponseCrud(type: CrudAlertString) {
    return {
      next: () => {
        this.showAlert('success', 'Excelente! :)', `Se ha ${type} la información exitosamente`)
        this.getItineraries()
        this.resetForm = true
        this.modalVisible = false
      },
      error: (error: any) => {
        this.resetForm = false
        this.showAlert('error', 'Ha ocurrido un error', error.error.message)
      }
    }
  }

}
