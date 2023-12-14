import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Itinerary } from "@app/core/models/itinerary";

import { environments } from '@env/environment'
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ItinerariesService {

    baseUri = environments.baseUrl

    constructor(private http: HttpClient){}

    getByName(itinerary: string){
      return this.http.get<Itinerary[]>(`${this.baseUri}/itinerarios/${itinerary}`)
    }

    getAll(){
      return this.http.get<Itinerary[]>(`${this.baseUri}/itinerarios`)
        .pipe(catchError(err =>  throwError(() => err)))
    }

    create(itinerary: Itinerary) {
      return this.http.post<Itinerary>(`${this.baseUri}/itinerarios/`, itinerary)
        .pipe(catchError(err => throwError(() => err)))
    }

    update(id: number, itinerary: Itinerary) {
      return this.http.patch<Itinerary>(`${this.baseUri}/itinerarios/${id}`, itinerary)
        .pipe(catchError(err => throwError(() => err)))
    }

    delete(id: number) {
      return this.http.delete<Itinerary>(`${this.baseUri}/itinerarios/${id}`)
        .pipe(catchError(err => throwError(() => err)))
    }

}
