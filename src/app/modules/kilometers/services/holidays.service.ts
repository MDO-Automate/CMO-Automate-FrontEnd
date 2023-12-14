import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Holiday } from '@app/core/models/holiday';
import { environments } from '@env/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  private baseUri = environments.baseUrl

  constructor(private http: HttpClient) {}

  getByName(holiday: string) {
    return this.http.get<Holiday[]>(`${this.baseUri}/festivos/${holiday}`)
  }

  getAll() {
    return this.http.get<Holiday[]>(`${this.baseUri}/festivos`)
      .pipe(catchError(err => throwError(() => err)))
  }

  create(holiday: Holiday) {
    return this.http.post<Holiday>(`${this.baseUri}/festivos/`, holiday)
      .pipe(catchError(err => throwError(() => err)))
  }

  update(fecha: string, holiday: Holiday) {
    return this.http.patch<Holiday>(`${this.baseUri}/festivos/${fecha}`, holiday)
      .pipe(catchError(err => throwError(() => err)))
  }

  delete(fecha: string) {
    return this.http.delete<Holiday>(`${this.baseUri}/festivos/${fecha}`)
      .pipe(catchError(err => throwError(() => err)))
  }
}
