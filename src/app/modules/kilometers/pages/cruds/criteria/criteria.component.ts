import { Component, OnInit } from '@angular/core';
import { Criterio } from '@app/core/models/criterio';
import { CrudAlertString, CrudString } from '@app/core/types/crud';
import { CriteriaService } from '@app/modules/kilometers/services/criteria.service';
import { MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css'],
})
export class CriteriaComponent implements OnInit {
  modalVisible = false
  criteriaTable: Criterio[] = []
  criterio: Criterio | null = null
  typeForm: CrudString = 'Create'
  resetForm = false

  constructor(
    private messageService: MessageService,
    private criteriaService: CriteriaService
  ) {}

  ngOnInit(): void {
    this.getCriteria()
  }

  getCriteria() {
    this.criteriaService.getAll()
      .subscribe({
        next: (data) => {this.criteriaTable = data},
        error: (error) => console.log(error)
      })
  }

  onButtonCreate() {
    this.typeForm = 'Create'
    this.resetForm = false
    this.modalVisible = true
    this.criterio = null
  }

  onItemEdit(item: Criterio) {
    this.typeForm = 'Update'
    this.modalVisible = true
    this.criterio = this.criteriaTable.find((i) => i.id === item.id) || null
  }

  createCriterio(criterio: Criterio) {
    this.criteriaService
      .create(criterio)
      .subscribe(this.handlerResponseCrud('guardado'))
  }

  updateCriterio(criterio: Criterio) {
    const { id } = criterio
    delete criterio.id
    this.criteriaService
      .update(id || 0, criterio)
      .subscribe(this.handlerResponseCrud('actualizado'))
  }

  deleteCriterio(criterio: Criterio) {
    this.criteriaService
      .delete(criterio?.id || 0)
      .subscribe(this.handlerResponseCrud('eliminado'))
  }

  showAlert(status: string, title: string, message: string) {
    this.messageService.add({
      severity: status,
      summary: title,
      detail: message,
    })
  }

  handlerResponseCrud(type: CrudAlertString) {
    return {
      next: () => {
        this.showAlert('success','Excelente! :)',`Se ha ${type} la información exitosamente`)
        this.getCriteria()
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
