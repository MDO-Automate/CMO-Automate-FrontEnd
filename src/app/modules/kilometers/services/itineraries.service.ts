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

    getAll(){
        return this.http.get<Itinerary[]>(`${this.baseUri}/itinerarios`)
            .pipe(catchError(err =>  throwError(()=> err)))
    }

}