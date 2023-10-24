import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Criteria } from "@app/core/models/criteria";

import { environments } from '@env/environment'
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CriteriesService {

    baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get<Criteria[]>(`${this.baseUri}/criterios`)
            .pipe(catchError(err =>  throwError(()=> err)))
    }

}