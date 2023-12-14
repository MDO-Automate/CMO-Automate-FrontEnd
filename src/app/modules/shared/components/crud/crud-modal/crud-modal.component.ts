import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
export class CrudModalComponent implements OnInit {

  @Input() visible: boolean = false
  @Input() typeModal: 'Create' | 'Update' = 'Create'
  @Input() scroll: boolean = false
  @Output() onClose: EventEmitter<boolean> = new EventEmitter()

  overScroll = ''

  emitOnClose(){
    this.onClose.emit(true)
  }

  ngOnInit(): void {
    if(this.scroll) this.overScroll = 'overflow-scroll'
  }

}
