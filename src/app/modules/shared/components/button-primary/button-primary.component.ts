import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPrimaryComponent {
  @Input() textLabel: string = ''
  @Input() icon: string = ''
  @Input() type: string = 'button'
  @Output() onClick: EventEmitter<boolean> = new EventEmitter()


  emitOnClick() {
    this.onClick.emit(true)
  }
}
