import { Route } from "./routes"

export interface Circulation {
  id?: number
  circulacion: number
  linea: string
}

export interface CirculationResponse {
  id?: number
  circulacion: number
  linea: Route
}


