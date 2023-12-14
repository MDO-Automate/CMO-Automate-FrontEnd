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

    getByName(criterio:string) {
      return this.http.get<Criterio[]>(`${this.baseUri}/criterios/${criterio}`)
    }

    getAll(){
      return this.http.get<Criterio[]>(`${this.baseUri}/criterios`)
        .pipe(catchError(err =>  throwError(()=> err)))
    }

    create(criterio: Criterio) {
      return this.http.post<Criterio>(`${this.baseUri}/criterios/`, criterio)
        .pipe(catchError(err => throwError(() => err)))
    }

    update(id: number, criterio: Criterio) {
      return this.http.patch<Criterio>(`${this.baseUri}/criterios/${id}`, criterio)
        .pipe(catchError(err => throwError(() => err)))
    }

    delete(id: number) {
      return this.http.delete(`${this.baseUri}/criterios/${id}`)
        .pipe(catchError(err => throwError(() => err)))
    }

}
