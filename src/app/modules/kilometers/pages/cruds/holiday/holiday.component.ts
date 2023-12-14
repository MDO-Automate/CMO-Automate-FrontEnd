import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '@app/modules/kilometers/services/holidays.service';
import { MessageService } from 'primeng/api';
import { Holiday } from '@app/core/models/holiday';
import { CrudAlertString, CrudString } from '@app/core/types/crud';

@Component({
  selector: 'app-holidays',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css'],
})
export class HolidayComponent implements OnInit {

  modalVisible = false
  holidaysTable: Holiday[] = []
  holiday: Holiday | null = null
  typeForm: CrudString = 'Create'
  resetForm = false

  constructor(
    private messageService: MessageService,
    private holidaysService: HolidaysService
  ) {}

  ngOnInit(): void {
    this.getHolidays()
  }

  getHolidays() {
    this.holidaysService.getAll()
      .subscribe({
        next: (data) => {this.holidaysTable = data},
        error: (error) => console.log(error)
      })
  }

  onButtonCreate() {
    this.typeForm = 'Create'
    this.resetForm = false
    this.modalVisible = true
    this.holiday = null
  }

  onItemEdit(item: Holiday) {
    this.typeForm = 'Update'
    this.modalVisible = true
    this.holiday = this.holidaysTable.find((i) => i.fecha === item.fecha) || null
  }

  createHoliday(holiday: Holiday) {
    this.holidaysService
      .create(holiday)
      .subscribe(this.handlerResponseCrud('guardado'))
  }

  updateHoliday(holiday: Holiday) {
    const { fecha } = holiday
    delete holiday.fecha
    this.holidaysService
      .update(fecha || '' , holiday)
      .subscribe(this.handlerResponseCrud('actualizado'))
  }

  deleteHoliday(holiday: Holiday) {
    this.holidaysService
      .delete(holiday?.fecha || '')
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
        this.getHolidays()
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
