import { Itinerary } from "./itinerary"
import { Routes } from "./routes"

export interface SchedulesItinerary {
  id?: number
  linea: string
  itinerario: string
  sentido: string
  lvInicio: string
  lvFin: string
  sInicio: string
  sFin: string
  dInicio: string
  dFin: string
}

export interface SchedulesItineraryResponse {
  id?: number
  linea: Routes
  itinerario: Itinerary
  sentido: string
  lvInicio: string
  lvFin: string
  sInicio: string
  sFin: string
  dInicio: string
  dFin: string
}
