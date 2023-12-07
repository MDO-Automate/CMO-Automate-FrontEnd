import { Component, OnInit } from '@angular/core';
import { Routes } from '@app/core/models/routes';

import { MessageService } from 'primeng/api';

import { CrudAlertString, CrudString } from '@app/core/types/crud';
import { Circulation, CirculationResponse } from '@app/core/models/circulation';

import { RoutesService } from '@app/modules/kilometers/services/routes.service';
import { CirculationsService } from '@app/modules/kilometers/services/circulations.service';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css'],
})
export class CirculationComponent implements OnInit {
  lines: Routes[] = [];
  modalVisible = false;
  circulations: CirculationResponse[] = [];
  circulation: CirculationResponse | null = null;
  circulationsTable: Circulation[] = [];
  typeForm: CrudString = 'Create';
  resetForm = false

  constructor(
    private linesService: RoutesService,
    private circulationsService: CirculationsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getLines();
    this.getCirculations();
  }

  getCirculations() {
    this.circulationsService.getAll().subscribe({
      next: (data) => this.assignCirculation(data),
      error: (error) => console.log(error),
    });
  }

  getLines() {
    this.linesService.getAll().subscribe({
      next: (data) => (this.lines = data),
      error: (error) => console.log(error),
    });
  }

  onButtonCreate() {
    this.typeForm = 'Create';
    this.resetForm = false
    this.modalVisible = true;
    this.circulation = null;
  }

  onItemEdit(item: Circulation) {
    this.typeForm = 'Update';
    this.modalVisible = true;
    this.circulation = this.circulations.find((i) => i.id === item.id) || null;
  }

  createCirculation(circulation: Circulation) {
    this.circulationsService
      .create(circulation)
      .subscribe(this.handlerResponseCrud('guardado'));
  }

  updateCirculation(circulation: Circulation) {
    const { id } = circulation;
    delete circulation.id;
    this.circulationsService
      .update(id || 0, circulation)
      .subscribe(this.handlerResponseCrud('actualizado'));
  }

  deleteCirculation(circulation: Circulation) {
    this.circulationsService
      .delete(circulation?.id || 0)
      .subscribe(this.handlerResponseCrud('eliminado'));
  }

  assignCirculation(data: CirculationResponse[]) {
    this.circulations = data;
    this.circulationsTable = this.circulations.map(
      ({ id, circulacion, linea }) => {
        const circulacionItem: Circulation = {
          id,
          circulacion,
          linea: linea.nombre,
        };
        return circulacionItem;
      }
    );
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
        this.getCirculations()
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
