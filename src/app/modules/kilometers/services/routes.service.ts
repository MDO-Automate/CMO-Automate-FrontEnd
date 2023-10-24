import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Routes } from '@app/core/models/routes';

import { environments } from '@env/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  baseUri = environments.baseUrl

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Routes[]>(`${this.baseUri}/rutas`)
      .pipe(catchError(err =>  throwError(()=> err)))
  }
}
