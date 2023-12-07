import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SchedulesItineraryResponse } from '@app/core/models/schedulesItinerary';
import { environments } from '@env/environment';
import { catchError, throwError } from 'rxjs';
import { SchedulesItinerary } from '../../../core/models/schedulesItinerary';

@Injectable({
  providedIn: 'root'
})
export class SchedulesItinerariesService {

  baseUri = environments.baseUrl

  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get<SchedulesItineraryResponse[]>(`${this.baseUri}/horarios-itinerario/${id}`)
  }

  getAll() {
    return this.http.get<SchedulesItineraryResponse[]>(`${this.baseUri}/horarios-itinerario`)
      .pipe(catchError(err => throwError(() => err)))
  }

  create(schedulesItinerary: SchedulesItinerary) {
    return this.http.post<SchedulesItineraryResponse>(`${this.baseUri}/horarios-itinerario/`, schedulesItinerary)
      .pipe(catchError(err => throwError(() => err)))
  }

  update(id: number, schedulesItinerary: SchedulesItinerary) {
    return this.http.patch<SchedulesItineraryResponse>(`${this.baseUri}/horarios-itinerario/${id}`, schedulesItinerary)
      .pipe(catchError(err => throwError(() => err)))
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUri}/horarios-itinerario/${id}`)
      .pipe(catchError(err => throwError(() => err)))
  }

}
