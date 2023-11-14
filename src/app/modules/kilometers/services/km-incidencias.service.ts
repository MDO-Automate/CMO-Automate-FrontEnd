import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environments } from "@env/environment";
import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class KmIncidenciaService {
    private baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    findAll(){
        return this.http.get<any[]>(`${this.baseUri}/km-incidencia`)
            .pipe(catchError(err =>  throwError(()=> err)))
    }

}