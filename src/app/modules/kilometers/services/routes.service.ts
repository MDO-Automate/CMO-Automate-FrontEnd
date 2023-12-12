import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, RouteResponse } from '@app/core/models/routes';

import { environments } from '@env/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  baseUri = environments.baseUrl

  constructor(private http: HttpClient) { }

  getByName(route: string){
    return this.http.get<RouteResponse[]>(`${this.baseUri}/rutas/${route}`)
  }

  getAll(){
    return this.http.get<RouteResponse[]>(`${this.baseUri}/rutas`)
      .pipe(catchError(err =>  throwError(()=> err)))
  }

  create(route: Route){
    return this.http.post<Route>(`${this.baseUri}/rutas/`, route)
      .pipe(catchError(err => throwError(() => err)))
  }

  update(id: number, route: Route){
    return this.http.patch<Route>(`${this.baseUri}/rutas/${id}`, route)
      .pipe(catchError(err => throwError(() => err)))
  }

  delete(id: number){
    return this.http.delete<Route>(`${this.baseUri}/rutas/${id}`)
        .pipe(catchError(err => throwError(() => err)))
  }
}
