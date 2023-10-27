import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kilometers } from '@app/core/models/kilometers';
import { YesNoPipe } from '@app/modules/shared/pipes/yes-no.pipe';
import { TableModule } from 'primeng/table';
import { DateTimePipe } from '../../pipes/date-time.pipe';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  standalone: true,
  imports: [ CommonModule, TableModule,FormsModule, YesNoPipe, DateTimePipe, InputNumberModule, CheckboxModule ],
  selector: 'app-km-table',
  templateUrl: './km-table.component.html',
  styleUrls: ['./km-table.component.css']
})
export class KmTableComponent {
   @Input() data : Kilometers[] = []
   @Input() isEditable: boolean = false
   @Input() isConciliation: boolean = false
}
