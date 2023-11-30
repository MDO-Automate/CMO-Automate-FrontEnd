import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoutesService } from '../../services/routes.service';
import { Routes } from '@app/core/models/routes';
import { CirculationsService } from '../../services/circulations.service';
import { Circulation, CirculationResponse } from '@app/core/models/circulation';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {

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
      this.getLines()
      this.getCirculations()
  }

  assignCirculation(data: CirculationResponse[]){
    this.circulations = data.map(({ id, circulacion, linea })=> {
      const circulacionItem: Circulation = {
        id,
        circulacion,
        linea: linea.nombre
      }
      return circulacionItem
   })
  }

  getCirculations(){
    this.circulationsService.getAll()
      .subscribe({
        next: (data) => this.assignCirculation(data),
        error: (error) => console.log(error)
      })
  }

  getLines(){
    this.linesService.getAll()
    .subscribe({
      next: (data) => this.lines = data,
      error: (error) => console.log(error)
    })
  }
  
  /*
  onEdit(circulation: number) {
    this.circulationsService.getByName(circulation)
      .subscribe({
        next: (data) => this.circulation = data[0],
        error: (error) => console.log(error)
      })
  }
  */
  /*
  onDelete(id: number){
    this.circulationsService.delete(id)
    .subscribe({
      next: () => {
        this.showAlert('success', 'Excelente! :)', 'Se ha eliminado la información exitosamente')
      },
      error: (error) => {
        this.showAlert('error', 'Ha ocurrido un error', error.error.message)
      }
    })
  }
  */

}
