import { Component, OnInit } from '@angular/core';
import { KmIncident } from '@app/core/models/km-incident';
import { CrudAlertString, CrudString } from '@app/core/types/crud';
import { KmIncidentsService } from '@app/modules/kilometers/services/km-incidents.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-km-incident',
  templateUrl: './km-incident.component.html',
  styleUrls: ['./km-incident.component.css'],
})
export class KmIncidentComponent implements OnInit{
  modalVisible = false
  kmIncidentsTable: KmIncident[] = []
  kmIncident: KmIncident | null = null
  typeForm: CrudString = 'Create'
  resetForm = false

  constructor(
    private messageService: MessageService,
    private kmIncidentsService: KmIncidentsService
  ) {}

  ngOnInit(): void {
    this.getKmIncidents()
  }

  getKmIncidents() {
    this.kmIncidentsService.findAll()
      .subscribe({
        next: (data) => this.kmIncidentsTable = data,
        error: (error) => console.log(error)
      })
  }

  onButtonCreate() {
    this.typeForm = 'Create'
    this.resetForm = false
    this.modalVisible = true
    this.kmIncident = null
  }

  onItemEdit(item: KmIncident) {
    this.typeForm = 'Update'
    this.modalVisible = true
    this.kmIncident = this.kmIncidentsTable.find((i) => i.id === item.id) || null
  }

  createKmIncident(kmIncident: KmIncident) {
    this.kmIncidentsService
      .create(kmIncident)
      .subscribe(this.handlerResponseCrud('guardado'))
  }

  updateKmIncident(kmIncident: KmIncident) {
    const { id } = kmIncident
    delete kmIncident.id
    this.kmIncidentsService
      .update(id || 0 , kmIncident)
      .subscribe(this.handlerResponseCrud('actualizado'))
  }

  deleteKmIncident(kmIncident: KmIncident) {
    this.kmIncidentsService
      .delete(kmIncident?.id || 0)
      .subscribe(this.handlerResponseCrud('eliminado'))
  }

  showAlert(status: string, title: string, message: string ){
    this.messageService.add({
      severity: status,
      summary: title,
      detail: message
    })
  }

  handlerResponseCrud(type: CrudAlertString) {
    return {
      next: () => {
        this.showAlert('success','Excelente! :)',`Se ha ${type} la información exitosamente`)
        this.getKmIncidents()
        this.resetForm = true
        this.modalVisible = false
      },
      error: (error: any) => {
        this.resetForm = false
        this.showAlert('error','Ha ocurrido un error', error.error.message)
      }
    }
  }
}
