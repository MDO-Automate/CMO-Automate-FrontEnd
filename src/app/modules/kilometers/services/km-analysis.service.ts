import { Injectable, Query } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environments } from '@env/environment'
import { Kilometers, KmFilter } from "@app/core/models/kilometers";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class KmAnalysisService {
    private baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    saveData(data: Kilometers[]){
      return this.http.post(`${this.baseUri}/km-analisis`, { data } )
      .pipe(catchError(err =>  throwError(()=> err)))
    }

    multiFilter(filter: KmFilter){
        const { 
            ruta,
            fecha,
            itinerario,
            criterio,
            kmInicial,
            kmFinal
        } = filter
        
        const queryKeys = [
            {
                name:'itinerario',
                value: itinerario
            },
            {
                name: 'criterio',
                value: criterio
            },
            {
                name:'kmInicial',
                value: kmInicial
            },
            {
                name: 'kmFinal',
                value: kmFinal
            }
        ]

        const query = queryKeys.map(item => !item.value ? '': `&${item.name}=${item.value}`).join('')

        return this.http.get(
            `${this.baseUri}/km-analisis/filter?ruta=${ruta}&fecha=${fecha}${query}`
        ).pipe(
            catchError(err =>  throwError(()=> err))
        )
    }
}