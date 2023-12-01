import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class HandlerResponseService {

    constructor(private messageService: MessageService){}

    showAlert(status: string, title: string, message: string) {
        this.messageService.add({ severity: status, summary: title, detail: message })
    }

    handlerResponseCrud(type: 'actualizado' | 'guardado' | 'eliminado', callback: any) {
        return {
          next: (data: any) => {
            this.showAlert(
              'success',
              'Excelente! :)',
              `Se ha ${type} la información exitosamente`
            )
            callback(data)
          },
          error: (error: any) => {
            this.showAlert('error', 'Ha ocurrido un error', error.error.message)
          }
        }
    }
}