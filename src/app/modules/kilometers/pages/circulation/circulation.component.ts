import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoutesService } from '../../services/routes.service';
import { Routes } from '@app/core/models/routes';
import { CirculationsService } from '../../services/circulations.service';
import { Circulation } from '@app/core/models/circulation';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {

  modalIsVisible = false

  formGroup: FormGroup = this.fb.group({
    circulacion: [null, Validators.required],
    linea: [null, Validators.required]
  })

  lines: Routes[] = []
  circulations: Circulation[] = []

  constructor(
    private fb: FormBuilder,
    private linesService: RoutesService,
    private circulationsService: CirculationsService
  ) { }

  ngOnInit(): void {
    this.linesService.getAll()
      .subscribe({
        next: (data) => this.lines = data,
        error: (error) => console.log(error)
      })

    this.circulationsService.getAll()
      .subscribe({
        next: (data) => this.circulations = data,
        error: (error) => console.log(error)
      })
  }

  saveButton() {

  }
  openModal() {
    this.modalIsVisible = true
  }
  closeModal() {
    this.modalIsVisible = false
  }
}
