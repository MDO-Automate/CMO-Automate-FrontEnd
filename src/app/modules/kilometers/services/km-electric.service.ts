import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environments } from '@env/environment'
import { kmElectric } from "@app/core/models/kmElectric";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class KmElectricService {
    private baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    saveData(data: kmElectric[]){
        return this.http.post(`${this.baseUri}/resumen-electrica`, data[0] )
            .pipe(catchError(err =>  throwError(()=> err)))
    }
}