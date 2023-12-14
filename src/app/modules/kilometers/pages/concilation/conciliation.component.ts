import { Component } from '@angular/core';
import { Kilometers, KmFilter } from '@app/core/models/kilometers';
import { KmAnalysisService } from '../../services/km-analysis.service';
import { kmGeneral } from '@app/core/models/kmGeneral';
import { KmGeneralService } from '../../services/km-general.service';
import { MessageService } from 'primeng/api';

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
    private messageService: MessageService
  ){}

  onFilter(kmFilter: KmFilter){

    const { fecha, linea } = kmFilter

    const changeTimezone = (date: string)=> {
      const dateTimeZone = new Date(date).toLocaleString('es-ES', {
        timeZone: 'America/Bogota',
      })
      const [fecha, hora] = dateTimeZone.split(', ');
      const [dia, mes, anio] = fecha.split('/');
      const [horas, minutos, segundos] = hora.split(':');
    
      return `${anio}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}:${segundos.padStart(2, '0')}.000Z`
    }


    this.kmAnalysisService.multiFilter(kmFilter).subscribe({
      next: (data)=> { 
        this.kmConciliation = data.map((item: any) => {
          return {
            ...item,
            itinerario: item.itinerario.nombre,
            linea: item.linea.nombre,
            inicioServicio: changeTimezone(`${item.inicioServicio}`),
            finServicio: changeTimezone(`${item.finServicio}`),
            inicioServicioEfectivo: changeTimezone(`${item.inicioServicioEfectivo}`),
            finServicioEfectivo: changeTimezone(`${item.finServicioEfectivo}`)
          }

        })
        if(this.kmConciliation.length < 1){
          this.showAlert('warn', 'Sin datos', 'No se encontraron datos asociados al filtro.')
        }
      }
    })

    this.kmGeneralService.filterByMonthAndRoute(fecha, linea).subscribe({
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
        this.showAlert('success', 'Exitoso', 'Se ha actualizado los kilometros de forma exitosa.')
      },
      error: (err)=> console.log(err)
    })

    this.kmAnalysisService.updateData(this.kmConciliation).subscribe({
      next: (data)=> this.showAlert('success', 'Exitoso', 'Se ha actualizado el informe general de forma exitosa.'),
      error: (err)=> console.log(err)
    })
  }

  onRemove(){
      this.kmGeneral = []
      this.kmConciliation = []
  }

  showAlert(type: string, header:string ,message:string){
    this.messageService.add({ severity: type, summary: header, detail: message });
  }
}
