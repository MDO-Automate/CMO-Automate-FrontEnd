import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonPrimaryComponent } from '../../button-primary/button-primary.component';
import { BtnConfirmComponent } from '../../btn-confirm/btn-confirm.component';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonPrimaryComponent,
    BtnConfirmComponent
  ],
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudTableComponent { 


  @Input() headers :string[] = ['Column 1', 'Column 2', 'Column 3']
  @Input() data: any[] = ['Dato 1', 'Dato 2', 'Dato 3'] 

  @Output() onEdit : EventEmitter<any> = new EventEmitter()
  @Output() onDelete : EventEmitter<any> = new EventEmitter()


  getBodyItems(data: any){
    const dataShow = { ...data }
    delete dataShow?.id
    return Object.values(dataShow)
  }

  emitEdit(item: any){
    this.onEdit.emit(item)
  }

  emitDelete(item: any){
    this.onDelete.emit(item)
  }
}
