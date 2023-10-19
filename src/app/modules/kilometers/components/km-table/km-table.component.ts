import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kilometers } from '@app/core/models/kilometers';
import { YesNoPipe } from '@app/modules/shared/pipes/yes-no.pipe';
import { TableModule } from 'primeng/table';

@Component({
  standalone: true,
  imports: [  TableModule,FormsModule, YesNoPipe, CommonModule ],
  selector: 'app-km-table',
  templateUrl: './km-table.component.html',
  styleUrls: ['./km-table.component.css']
})
export class KmTableComponent {
   @Input() data : Kilometers[] = []
   @Input() isEditing: boolean = false
}
