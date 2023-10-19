import { Component } from '@angular/core';
import { environments } from '@env/environment'
import { Kilometers } from '@app/core/models/kilometers';
import { kmElectric } from '@app/core/models/kmElectric';
import { kmGeneral } from '@app/core/models/kmGeneral';
import { KmAnalysisService } from '../../services/km-analysis.service';
import { KmGeneralService } from '../../services/km-general.service';
import { KmElectricService } from '../../services/km-electric.service';

@Component({
  selector: 'app-km-analysis',
  templateUrl: './km-analysis.component.html',
  styleUrls: ['./km-analysis.component.css']
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

  distanciaSobreMedia = 200

  constructor(
    private kmAnalysisService: KmAnalysisService,
    private kmGeneralService: KmGeneralService,
    private kmElectricService: KmElectricService
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
    const dataCombonine= [ ...this.dataAnalysis, ...this.dataDetails  ]
    this.kmAnalysisService.saveData(dataCombonine).subscribe((res) => console.log('Data ', res))
    this.kmGeneralService.saveData(this.generalData).subscribe((res) => console.log('Data ', res))
    this.kmElectricService.saveData(this.dataElectric).subscribe(res => console.log('Data ', res))
  }
}
