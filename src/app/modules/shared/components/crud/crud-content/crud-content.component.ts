import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CrudTableComponent } from '../table-crud/crud-table.component';
import { CrudModalComponent } from '../crud-modal/crud-modal.component';
import { ButtonPrimaryComponent } from '../../button-primary/button-primary.component';

@Component({
  selector: 'app-crud-content',
  standalone: true,
  imports: [
    CommonModule,
    CrudTableComponent,
    CrudModalComponent,
    ButtonPrimaryComponent
  ],
  templateUrl: './crud-content.component.html',
  styleUrls: ['./crud-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudContentComponent {
  CREATE: 'Create' = 'Create'
  UPDATE: 'Update' = 'Update'

  type: 'Update' | 'Create' = this.CREATE

  @Input() data : any[] = []
  @Input() headers: string[] = []
  @Input() modalVisible: boolean = false
  @Input() resetForm: boolean = false
  @Input() scroll: boolean = false

  @Output() onItemEdit = new EventEmitter<any>()
  @Output() onItemDelete = new EventEmitter<any>()
  @Output() onCreateButton = new EventEmitter()

  openModal() {
    this.modalVisible = true
  }
  closeModal() {
    this.modalVisible = false
  }

  onCreate(){
    this.type = 'Create'
    this.openModal()
    this.onCreateButton.emit()
  }

  onEdit(item: any){
    this.type = 'Update'
    this.openModal()
    this.onItemEdit.emit(item)
  }

  onDelete(item: any){
    this.onItemDelete.emit(item)
  }

}
