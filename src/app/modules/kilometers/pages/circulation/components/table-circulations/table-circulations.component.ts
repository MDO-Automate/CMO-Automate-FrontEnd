import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Circulation } from '@app/core/models/circulation';
import { CirculationsService } from '@app/modules/kilometers/services/circulations.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table-circulations',
  templateUrl: './table-circulations.component.html',
  styleUrls: ['./table-circulations.component.css'],
})
export class TableCirculationsComponent {

  constructor(
    private circulationsService: CirculationsService,
    private messageService: MessageService
  ) {}

  @Input() data: Circulation[] = []
  @Output() onReload: EventEmitter<boolean> = new EventEmitter()

  modalIsVisible = false
  circulation: Circulation | null = null

  openModal() {
    this.modalIsVisible = true
  }
  closeModal() {
    this.modalIsVisible = false
  }

  emitReload(){
    this.onReload.emit(true)
  }

  showAlert(status: string, title: string, message: string) {
    this.messageService.add({ severity: status, summary: title, detail: message });
  }

  onEdit(circulation: number) {
    this.openModal()
    this.circulationsService.getByName(circulation)
      .subscribe({
        next: (data) => this.circulation = data[0],
        error: (error) => console.log(error)
      })
  }

  onDelete(id: number){
    this.circulationsService.delete(id)
    .subscribe({
      next: () => {
        this.showAlert('success', 'Excelente! :)', 'Se ha eliminado la información exitosamente')
      },
      error: (error) => {
        this.showAlert('error', 'Ha ocurrido un error', error.error.message)
      }
    })
  }

 }
