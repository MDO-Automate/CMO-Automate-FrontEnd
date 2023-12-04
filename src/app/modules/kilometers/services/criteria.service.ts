import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Criterio } from "@app/core/models/criterio";

import { environments } from '@env/environment'
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CriteriaService {

    private baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get<Criterio[]>(`${this.baseUri}/criterios`)
            .pipe(catchError(err =>  throwError(()=> err)))
    }

}
