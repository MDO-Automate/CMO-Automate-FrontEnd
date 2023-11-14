import { Component, EventEmitter, Output } from '@angular/core';
import { environments } from '@env/environment'
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-km-analysis-upload',
  templateUrl: './km-analysis-upload.component.html',
  styleUrls: ['./km-analysis-upload.component.css']
})
export class KmAnalysisUploadComponent { 
  baseUri = environments.baseUrl
  isLoading = false
  message: Message[] = [
    { 
      severity: 'warn', 
      summary: 'Advertencia', 
      detail: 'Asegurese de que el archivo a subir tenga la extensión .xls' 
    }
  ]

  @Output() onLoading: EventEmitter<boolean> = new EventEmitter(false)
  @Output() uploaded: EventEmitter<any> = new EventEmitter()
  
  constructor(
    private messageService: MessageService,
  ){}

  onUploaded(evnt: any){
    this.uploaded.emit(evnt)
    this.onLoading.emit(false)
    this.isLoading = true
  }  

  onSendFile(){
    this.onLoading.emit(true)
    this.isLoading = true
  }

  showError(envt: any) {
    this.messageService.add(
      { 
        severity: 'error', 
        summary: 'Error', 
        detail: envt.error.error.message 
      }
    )
    this.onLoading.emit(false)
    this.isLoading = false
  }
}
