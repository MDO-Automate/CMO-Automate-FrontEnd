import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { kmElectric } from '@app/core/models/kmElectric';
import { TableModule } from 'primeng/table';

@Component({
  standalone: true,
  imports: [ TableModule, CommonModule ],
  selector: 'app-kmElec-sumary-table',
  templateUrl: './kmElec-sumary-table.component.html',
  styleUrls: ['./kmElec-sumary-table.component.css']
})
export class KmSumaryTableComponent {
  @Input() data: kmElectric[] = []
}
