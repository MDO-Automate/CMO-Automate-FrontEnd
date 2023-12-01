import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-crud-modal',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule
  ],
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudModalComponent { 
  @Input() visible: boolean = false
  @Input() typeModal: 'Create' | 'Update' = 'Create'
  @Output() onClose: EventEmitter<boolean> = new EventEmitter() 

  emitOnClose(){
    this.onClose.emit(true)
  }

}
