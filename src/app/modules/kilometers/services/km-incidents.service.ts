import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { KmIncident } from "@app/core/models/km-incident";
import { environments } from "@env/environment";
import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class KmIncidentsService {
    private baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    findAll(){
        return this.http.get<any[]>(`${this.baseUri}/km-incidencia`)
            .pipe(catchError(err =>  throwError(()=> err)))
    }

    findByName(kmIncident: string) {
      return this.http.get<KmIncident[]>(`${this.baseUri}/km-incidencia/${kmIncident}`)
    }

    create(kmIncident: KmIncident) {
      return this.http.post<KmIncident>(`${this.baseUri}/km-incidencia/`, kmIncident)
      .pipe(catchError(err => throwError(() => err)))
    }

    update(id: number, kmIncident: KmIncident) {
      return this.http.patch<KmIncident>(`${this.baseUri}/km-incidencia/${id}`, kmIncident)
        .pipe(catchError(err => throwError(() => err)))
    }

    delete(id: number) {
      return this.http.delete<KmIncident>(`${this.baseUri}/km-incidencia/${id}`)
        .pipe(catchError(err => throwError(() => err)))
    }

}
