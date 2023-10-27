import { Component } from '@angular/core';
import { Kilometers, KmFilter } from '@app/core/models/kilometers';
import { KmAnalysisService } from '../../services/km-analysis.service';
import { kmGeneral } from '@app/core/models/kmGeneral';
import { KmGeneralService } from '../../services/km-general.service';

@Component({
  selector: 'app-conciliation',
  templateUrl: './conciliation.component.html',
  styleUrls: ['./conciliation.component.css']
})
export class ConciliationComponent {
  kmConciliation: Kilometers[]= []
  kmGeneral: kmGeneral[] = []

  constructor(
    private kmAnalysisService: KmAnalysisService,
    private kmGeneralService: KmGeneralService,
    ){}

  onFilter(kmFilter: KmFilter){

    const { fecha, ruta } = kmFilter

    this.kmAnalysisService.multiFilter(kmFilter).subscribe({
      next: (data)=> { 
        this.kmConciliation = data.map((item: any) => {
          return {
            ...item,
            itinerario: item.itinerario.nombre,
            linea: item.linea.nombre
          }
        })
      }
    })

    this.kmGeneralService.filterByMonthAndRoute(fecha, ruta).subscribe({
      next: (data: any)=>  { 
        this.kmGeneral = data.map((item: any) => ({
          ...item, 
          linea: item.linea.nombre
        }))
      }
    })
    
  }

  onUpdate(){
    this.kmGeneralService.update(this.kmConciliation).subscribe({
      next: (data: any)=>  { 
        this.kmGeneral = data.map((item: any) => ({
          ...item, 
          linea: item.linea.nombre
        }))
      },
      error: (err)=> console.log(err)
    })

    this.kmAnalysisService.updateData(this.kmConciliation).subscribe({
      next: (data)=> console.log(data),
      error: (err)=> console.log(err)
    })
  }

  onRemove(){
      this.kmGeneral = []
      this.kmConciliation = []
  }
}
