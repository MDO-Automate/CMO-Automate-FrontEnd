import { Component, OnInit } from '@angular/core';
import { Criterio } from '@app/core/models/criterio';
import { CrudString } from '@app/core/types/crud';
import { CriteriaService } from '@app/modules/kilometers/services/criteria.service';
import { MessageService } from 'primeng/api';

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
        next: (data) => this.criteriaTable = data,
        error: (error) => console.log(error)
      })
  }

  onButtonCreate() {
    this.typeForm = 'Create'
    this.resetForm = true
    this.modalVisible = true
    this.criterio = null
  }

  onItemEdit(item: Criterio) {
    this.typeForm = 'Update'
    this.modalVisible = true
    this.criterio = this.criteriaTable.find((i) => i.id === item.id) || null
  }



 }
