import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Circulation } from '@app/core/models/circulation';
import { environments } from '@env/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CirculationsService {

  baseUri = environments.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  getByName(circulation: number) {
    return this.http.get<Circulation[]>(`${this.baseUri}/circulacion/${circulation}`)
  }

  getAll() {
    return this.http.get<Circulation[]>(`${this.baseUri}/circulacion/`)
      .pipe(catchError(err => throwError(() => err)))
  }

  create(circulation: Circulation) {
    return this.http.post<Circulation>(`${this.baseUri}/circulacion/`, circulation)
      .pipe(catchError(err => throwError(() => err)))
  }

  update(id: number, circulation: Circulation) {
    return this.http.patch<Circulation>(`${this.baseUri}/circulacion/${id}`, circulation)
      .pipe(catchError(err => throwError(() => err)))
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUri}/circulacion/${id}`)
      .pipe(catchError(err => throwError(() => err)))
  }

}
