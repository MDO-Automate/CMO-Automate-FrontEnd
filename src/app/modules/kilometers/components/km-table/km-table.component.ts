import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kilometers } from '@app/core/models/kilometers';
import { YesNoPipe } from '@app/modules/shared/pipes/yes-no.pipe';
import { TableModule } from 'primeng/table';
import { DateTimePipe } from '../../pipes/date-time.pipe';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { KmIncidenciaService } from '../../services/km-incidencias.service';

@Component({
  standalone: true,
  selector: 'app-km-table',
  templateUrl: './km-table.component.html',
  styleUrls: ['./km-table.component.css'],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    YesNoPipe,
    DateTimePipe,
    InputNumberModule,
    CheckboxModule,
    DropdownModule,
  ],
})
export class KmTableComponent implements OnInit {
  @Input() data: Kilometers[] = [];
  @Input() isEditable: boolean = false;
  @Input() isConciliation: boolean = false;

  incidences: any[] = []

  constructor(private kmIncidenciaService: KmIncidenciaService ){}

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  ngOnInit(): void {
    this.getIncidences()
  }

  getIncidences(){
    this.kmIncidenciaService.findAll().subscribe((data)=>{
      this.incidences = data.map((item)=> {
        return {
          ...item,
          incidencia : this.getIncidenceSelected(item.incidencia)
        }
      })
    })
  }

  getIncidenceSelected(id: number){
    return this.incidences.filter((item: any) => item.id === id)
  }
}
