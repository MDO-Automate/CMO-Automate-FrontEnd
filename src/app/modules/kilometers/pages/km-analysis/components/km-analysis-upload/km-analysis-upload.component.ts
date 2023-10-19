import { Component, EventEmitter, Output } from '@angular/core';
import { environments } from '@env/environment'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-km-analysis-upload',
  templateUrl: './km-analysis-upload.component.html',
  styleUrls: ['./km-analysis-upload.component.css']
})
export class KmAnalysisUploadComponent { 
  baseUri = environments.baseUrl
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter(false)
  @Output() uploaded: EventEmitter<any> = new EventEmitter()

  constructor(
    private messageService: MessageService,
  ){}

  onUploaded(evnt: any){
    this.uploaded.emit(evnt)
    this.isLoading.emit(false)
  }  


  onSendFile(){
    this.isLoading.emit(true)
  }

  showError(envt: any) {
    this.messageService.add(
      { 
        severity: 'error', 
        summary: 'Error', 
        detail: envt.error.error.message 
      }
    )
    this.isLoading.emit(false)
  }
}
