import { Component, OnInit } from '@angular/core';
import { Itinerary } from '@app/core/models/itinerary';
import { Routes } from '@app/core/models/routes';
import { CrudAlertString, CrudString } from '@app/core/types/crud';

import { SchedulesItineraryResponse } from '@app/core/models/schedulesItinerary';
import { SchedulesItinerary } from '@app/core/models/schedulesItinerary';

import { ItinerariesService } from '@app/modules/kilometers/services/itineraries.service';
import { RoutesService } from '@app/modules/kilometers/services/routes.service';
import { SchedulesItinerariesService } from '@app/modules/kilometers/services/schedules-itineraries.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-schedules-itinerary',
  templateUrl: './schedules-itinerary.component.html',
  styleUrls: ['./schedules-itinerary.component.css']
})
export class SchedulesItineraryComponent implements OnInit{
  lines: Routes[] = []
  itineraries: Itinerary[] = []
  modalVisible = false
  schedulesItineraries: SchedulesItineraryResponse[] = []
  schedulesItinerary: SchedulesItineraryResponse | null = null
  schedulesItinerariesTable: SchedulesItinerary[] = []
  typeForm: CrudString = 'Create';
  resetForm = false

  constructor(
    private linesService: RoutesService,
    private itinerariesService: ItinerariesService,
    private schedulesItinerariesService: SchedulesItinerariesService,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.getLines()
    this.getItineraries()
    this.getSchedulesItineraries()
  }

  getLines() {
    this.linesService.getAll().subscribe({
      next: (data) => (this.lines = data),
      error: (error) => console.log(error),
    });
  }

  getItineraries() {
    this.itinerariesService.getAll().subscribe({
      next: (data) => (this.itineraries = data),
      error: (error) => console.log(error),
    });
  }

  getSchedulesItineraries() {
    this.schedulesItinerariesService.getAll().subscribe({
      next: (data) => this.assignSchedulesItinerary(data),
      error: (error) => console.log(error),
    });
  }

  onButtonCreate() {
    this.typeForm = 'Create';
    this.resetForm = false
    this.modalVisible = true;
    this.schedulesItinerary = null;
  }

  onItemEdit(item: SchedulesItinerary) {
    this.typeForm = 'Update';
    this.modalVisible = true;
    this.schedulesItinerary = this.schedulesItineraries.find((i) => i.id === item.id) || null;
  }

  createSchedulesItinerary(schedulesItinerary: SchedulesItinerary) {
    this.schedulesItinerariesService
      .create(schedulesItinerary)
      .subscribe(this.handlerResponseCrud('guardado'));
  }

  updateSchedulesItinerary(schedulesItinerary: SchedulesItinerary) {
    const { id } = schedulesItinerary;
    delete schedulesItinerary.id;
    this.schedulesItinerariesService
      .update(id || 0, schedulesItinerary)
      .subscribe(this.handlerResponseCrud('actualizado'));
  }

  deleteSchedulesItinerary(schedulesItinerary: SchedulesItinerary) {
    this.schedulesItinerariesService
      .delete(schedulesItinerary?.id || 0)
      .subscribe(this.handlerResponseCrud('eliminado'));
  }

  assignSchedulesItinerary(data: SchedulesItineraryResponse[]) {
    this.schedulesItineraries = data
    this.schedulesItinerariesTable = this.schedulesItineraries.map(({
      id,
      linea,
      itinerario,
      sentido,
      lvInicio,
      lvFin,
      sInicio,
      sFin,
      dInicio,
      dFin
    }) => {
        const schedulesItineraryItem: SchedulesItinerary = {
          id,
          linea: linea.nombre,
          itinerario: itinerario.nombre,
          sentido,
          lvInicio,
          lvFin,
          sInicio,
          sFin,
          dInicio,
          dFin
        }
        return schedulesItineraryItem
      }
    )
  }

  showAlert(status: string, title: string, message: string) {
    this.messageService.add({
      severity: status,
      summary: title,
      detail: message,
    });
  }

  handlerResponseCrud(type: CrudAlertString) {
    return {
      next: () => {
        this.showAlert(
          'success',
          'Excelente! :)',
          `Se ha ${type} la información exitosamente`
        );
        this.getSchedulesItineraries()
        this.resetForm = true
        this.modalVisible = false;
      },
      error: (error: any) => {
        this.resetForm = false
        this.showAlert('error', 'Ha ocurrido un error', error.error.message);
      },
    };
  }
}
