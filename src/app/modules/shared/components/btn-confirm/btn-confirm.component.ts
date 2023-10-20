import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-btn-confirm',
  templateUrl: './btn-confirm.component.html',
  styleUrls: ['./btn-confirm.component.css'],
  standalone: true,
  imports: [  
    ConfirmPopupModule,  
    ButtonModule
  ],
  providers: [ConfirmationService]
})
export class BtnConfirmComponent {
  
  @Input() btnText: string = ''
  @Input() textPopup: string = ''
  @Input() icon: string = ''
  @Output() accept: EventEmitter<boolean> = new EventEmitter()
  @Output() reject: EventEmitter<boolean> = new EventEmitter()

  constructor(private confirmationService:ConfirmationService){}

  confirm(event: Event) {
    this.confirmationService.confirm({
        acceptLabel: 'Sí',
        rejectLabel: 'No',
        target: event.target as EventTarget,
        icon: 'pi pi-exclamation-triangle',
        message: this.textPopup,
        accept: ()=> this.accept.emit(true),
        reject: ()=> this.reject.emit(true)
    });
  }
}
