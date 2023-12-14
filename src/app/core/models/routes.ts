import { Itinerary } from "./itinerary"

export interface Route {
    id?:                    number
    nombre:                 string
    kmItinerario1:          number
    kmItinerarioRepro1:     number
    kmItinerario2:          number
    kmItinerarioRepro2:     number
    kmItinerario3:          number
    kmItinerarioRepro3:     number
    kmItinerario4:          number
    kmItinerarioRepro4:     number
    inicioHabil:            string
    inicioSabado:           string
    inicioDomingo:          string
    finHabil:               string
    finSabado:              string
    finDomingo:             string
    itinerario1:            string
    itinerario2:            string
    itinerario3:            string
    itinerario4:            string
}

export interface RouteResponse {
    id?:                    number
    nombre:                 string
    kmItinerario1:          number
    kmItinerarioRepro1:     number
    kmItinerario2:          number
    kmItinerarioRepro2:     number
    kmItinerario3:          number
    kmItinerarioRepro3:     number
    kmItinerario4:          number
    kmItinerarioRepro4:     number
    inicioHabil:            string
    inicioSabado:           string
    inicioDomingo:          string
    finHabil:               string
    finSabado:              string
    finDomingo:             string
    itinerario1:            Itinerary
    itinerario2:            Itinerary
    itinerario3:            Itinerary
    itinerario4:            Itinerary
}
