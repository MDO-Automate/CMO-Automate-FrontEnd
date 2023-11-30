import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() data : any[] = []
  @Input() headers: string[] = []
  @Input() modalVisible: boolean = false

  openModal() {
    this.modalVisible = true
  }
  closeModal() {
    this.modalVisible = false
  }
}
