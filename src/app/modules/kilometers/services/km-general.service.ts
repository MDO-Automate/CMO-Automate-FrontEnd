import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environments } from '@env/environment'
import { kmGeneral } from "@app/core/models/kmGeneral";
import { catchError, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class KmGeneralService {
    private baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    saveData(data: kmGeneral[]){
        return this.http.post(`${this.baseUri}/informe-general`, data[0] )
            .pipe(catchError(err => of(err)))

    }
}