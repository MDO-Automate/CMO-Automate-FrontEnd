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

    updateData(data: Kilometers[]){
        return this.http.patch(`${this.baseUri}/km-analisis`, { data } )
        .pipe(catchError(err =>  throwError(()=> err)))
    }

    multiFilter(filter: KmFilter){

        const queryList = Object.keys(filter).map(
          item => !filter[item]? '-': `${item}=${filter[item]}`
        )
        const queryString = queryList.join('&').replace(/&-/g, '')

        return this.http.get<Kilometers[]>(
            `${this.baseUri}/km-analisis/filter?${queryString}`
        ).pipe(
            catchError(err =>  throwError(()=> err))
        )
    }
}