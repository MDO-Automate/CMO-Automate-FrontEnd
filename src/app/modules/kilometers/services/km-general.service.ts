import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environments } from '@env/environment'
import { kmGeneral } from "@app/core/models/kmGeneral";
import { catchError, throwError } from "rxjs";
import { Kilometers } from "@app/core/models/kilometers";

@Injectable({
    providedIn: 'root'
})
export class KmGeneralService {
    private baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    saveData(data: kmGeneral[]){
        return this.http.post(`${this.baseUri}/informe-general`, data[0] )
            .pipe(catchError(err =>  throwError(()=> err)))
    }

    update(data: Kilometers[]){
        return this.http.patch<Kilometers[]>(`${this.baseUri}/informe-general`, { data } )
            .pipe(catchError(err =>  throwError(()=> err)))
    }

    filterByMonthAndRoute(date: string, route: number){
        return this.http.get<kmGeneral[]>(`${this.baseUri}/informe-general?fecha=${date}&linea=${route}`)
            .pipe(catchError(err =>  throwError(()=> err)))
    }
}