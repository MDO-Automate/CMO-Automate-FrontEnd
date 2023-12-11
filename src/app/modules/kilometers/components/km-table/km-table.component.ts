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
import { KmIncidentsService } from '../../services/km-incidents.service';
import { DatePipe } from '../../pipes/date.pipe';

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
    DatePipe,
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

  constructor(private kmIncidentService: KmIncidentsService) { }

  ngOnInit(): void {
    this.getIncidences()

  }

  getIncidences() {
    this.kmIncidentService.findAll().subscribe((data) => {
      this.incidences = data
    })
  }
}
