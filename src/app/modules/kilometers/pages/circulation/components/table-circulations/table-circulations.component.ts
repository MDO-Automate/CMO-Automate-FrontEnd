import { Component, Input } from '@angular/core';
import { Circulation } from '@app/core/models/circulation';
import { CirculationsService } from '@app/modules/kilometers/services/circulations.service';

@Component({
  selector: 'app-table-circulations',
  templateUrl: './table-circulations.component.html',
  styleUrls: ['./table-circulations.component.css'],
})
export class TableCirculationsComponent {

  constructor(
    private circulationsService: CirculationsService
  ) {}

  @Input() data: Circulation[] = []

  modalIsVisible = false
  circulation: Circulation | null = null

  openModal() {
    this.modalIsVisible = true
  }
  closeModal() {
    this.modalIsVisible = false
  }

  onEdit(circulation: number) {
    this.openModal()
    this.circulationsService.getByName(circulation)
      .subscribe({
        next: (data) => this.circulation = data[0],
        error: (error) => console.log(error)

      })


  }
 }
