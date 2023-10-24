import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KmFilter } from '@app/core/models/kilometers';
import { Routes } from '@app/core/models/routes';
import { RoutesService } from '@app/modules/kilometers/services/routes.service';

@Component({
  selector: 'app-km-filter',
  templateUrl: './km-filter.component.html',
  styleUrls: ['./km-filter.component.css']
})
export class KmFilterComponent implements OnInit {

  lines: Routes[] | null = null

  filterForm : FormGroup = this.fb.group({
    ruta: [null],
    fecha: [null],
    itinerario: [null],
    criterio: [null],
    kmInicial: [null],
    kmFinal : [null]
  })
  @Output() onDataFilter: EventEmitter<KmFilter> = new EventEmitter()
  
  constructor(
    private fb: FormBuilder,
    private routesService: RoutesService
  ){}

  ngOnInit(): void {
    this.routesService.getAll().subscribe({
      next: (data)=> this.lines = data 
    })
  }

  cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
  ];

  submit(){
    console.log(this.filterForm.value)
    this.onDataFilter.emit(this.filterForm.value)
  }


}
