import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteria } from '@app/core/models/criteria';
import { Itinerary } from '@app/core/models/itinerary';
import { KmFilter } from '@app/core/models/kilometers';
import { Routes } from '@app/core/models/routes';
import { CriteriesService } from '@app/modules/kilometers/services/criteries.service';
import { ItinerariesService } from '@app/modules/kilometers/services/itineraries.service';
import { KmAnalysisService } from '@app/modules/kilometers/services/km-analysis.service';
import { RoutesService } from '@app/modules/kilometers/services/routes.service';

@Component({
  selector: 'app-km-filter',
  templateUrl: './km-filter.component.html',
  styleUrls: ['./km-filter.component.css']
})
export class KmFilterComponent implements OnInit {

  lines: Routes[] | null = null
  itineraries : Itinerary[] | null = null
  criteries: Criteria[] | null = null
  formError = false

  filterForm : FormGroup = this.fb.group({
    ruta: [null, Validators.required],
    fecha: [null, Validators.required],
    itinerario: [null],
    criterio: [null],
    kmInicial: [null],
    kmFinal : [null]
  })
  @Output() onDataFilter: EventEmitter<KmFilter> = new EventEmitter()
  
  constructor(
    private fb: FormBuilder,
    private routesService: RoutesService,
    private itinerariesService: ItinerariesService,
    private criteriesService: CriteriesService
  ){}

  ngOnInit(): void {
    this.routesService.getAll().subscribe({
      next: (data)=> this.lines = data 
    })
    this.itinerariesService.getAll().subscribe({
      next: (data)=> this.itineraries = data 
    })
    this.criteriesService.getAll().subscribe({
      next: (data)=> this.criteries = data 
    })
  }

  clear(){
    this.filterForm.reset()
  }

  submit(){
    if(this.filterForm.valid){
      this.onDataFilter.emit(this.filterForm.value)
      return
    }
    this.formError = true
  }


}
