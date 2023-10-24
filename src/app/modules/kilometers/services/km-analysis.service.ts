import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environments } from '@env/environment'
import { Kilometers } from "@app/core/models/kilometers";
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
}