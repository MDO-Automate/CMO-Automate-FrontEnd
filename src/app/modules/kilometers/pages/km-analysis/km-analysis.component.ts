import { Component } from '@angular/core';
import { environments } from '@env/environment'
import { Kilometers } from '@app/core/models/kilometers';
import { kmElectric } from '@app/core/models/kmElectric';
import { kmGeneral } from '@app/core/models/kmGeneral';
import { KmAnalysisService } from '../../services/km-analysis.service';
import { KmGeneralService } from '../../services/km-general.service';
import { KmElectricService } from '../../services/km-electric.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-km-analysis',
  templateUrl: './km-analysis.component.html',
  styleUrls: ['./km-analysis.component.css'],
})
export class KmAnalysisComponent {
  baseUri = environments.baseUrl
  activeTab = 0
  data : Kilometers[] = []
  dataAnalysis: Kilometers[] = []
  dataDetails : Kilometers[] = []
  dataElectric : kmElectric[] = []
  generalData: kmGeneral[] = []
  lodadedData : boolean = false
  isLoading: boolean = false
  requestErrorCount = 0

  distanciaSobreMedia = 200

  constructor(
    private kmAnalysisService: KmAnalysisService,
    private kmGeneralService: KmGeneralService,
    private kmElectricService: KmElectricService,
    private messageService: MessageService,
  ){}

  onUploaded(event: any){
    this.data = event.originalEvent.body.data.analisisKm
    this.dataElectric = event.originalEvent.body.data.resumenElec
    this.generalData = event.originalEvent.body.data.resumenGeneral
    this.dataAnalysis = this.data.filter(item =>  item.distancia > (item.media + this.distanciaSobreMedia))
    this.dataDetails = this.data.filter(item =>  item.distancia < (item.media + this.distanciaSobreMedia))
    this.isLoading = false
    this.lodadedData = true
  }

  changeIsLoading(evnt: boolean){
    this.isLoading = evnt
  }

  onChangeRoute(){
    this.lodadedData = false
  }

  submit(){
    this.isLoading = true
    this.requestErrorCount = 0

    const dataCombonine = [ ...this.dataAnalysis, ...this.dataDetails  ]

    this.kmAnalysisService.saveData(dataCombonine).subscribe(res => {
        if(res.error){
          this.showErrorMessage('análisis de kilómetros')
          return
        }
        this.requestWithoutError()

    })
    this.kmGeneralService.saveData(this.generalData).subscribe(res => {
      if(res.error){
        this.showErrorMessage('informe general')
        return
      }
      this.requestWithoutError()
    })
    this.kmElectricService.saveData(this.dataElectric).subscribe(res => {
      if(res.error){
        this.showErrorMessage('resumen de electricas')
        return 
      }
      this.requestWithoutError()
    })
  }

  requestWithoutError(){
    this.requestErrorCount += 1
    if(this.requestErrorCount === 3){
      this.isLoading = false
      this.messageService.add(
        { 
          severity: 'success', 
          summary: 'Guardado', 
          detail: 'Se ha guardado la información de forma exitosa.' 
        }
      )
      setTimeout(()=> this.lodadedData = false, 2000)  
    }
  }

  showErrorMessage(typeError: string){
    this.messageService.add(
      { 
        severity: 'error', 
        summary: 'Error', 
        detail: `No se pudo cargar la información relacionada al ${typeError}, porfavor intentelo más tarde. `
      }
    )
  }

}
