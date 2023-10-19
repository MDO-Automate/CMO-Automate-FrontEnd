import { Component, Input } from '@angular/core';
import { kmGeneral } from '@app/core/models/kmGeneral';
import { TableModule } from 'primeng/table';

@Component({
  standalone: true,
  imports: [ TableModule ],
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.css']
})
export class GeneralTableComponent {
  @Input() data: kmGeneral[] = []
}
