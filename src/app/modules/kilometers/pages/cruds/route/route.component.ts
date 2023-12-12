import { Component, OnInit } from '@angular/core';
import { Itinerary } from '@app/core/models/itinerary';
import { Route, RouteResponse } from '@app/core/models/routes';
import { CrudAlertString, CrudString } from '@app/core/types/crud';
import { ItinerariesService } from '@app/modules/kilometers/services/itineraries.service';
import { RoutesService } from '@app/modules/kilometers/services/routes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
})
export class RouteComponent implements OnInit {
  itineraries: Itinerary[] = []
  modalVisible = false
  routes: RouteResponse[] = []
  route: RouteResponse | null = null
  routesTable: Route[] = []
  typeForm: CrudString = 'Create';
  resetForm = false


  constructor(
    private itinerariesService: ItinerariesService,
    private routesService: RoutesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getItineraries()
    this.getRoutes()
  }

  getItineraries() {
    this.itinerariesService.getAll().subscribe({
      next: (data) => (this.itineraries = data),
      error: (error) => console.log(error),
    });
  }

  getRoutes() {
    this.routesService.getAll()
      .subscribe({
        next: (data) => this.assignRoute(data),
        error: (error) => console.log(error)

      })
  }

  onButtonCreate() {
    this.typeForm = 'Create';
    this.resetForm = false
    this.modalVisible = true;
    this.route = null;
  }


  onItemEdit(item: Route) {
    this.typeForm = 'Update';
    this.modalVisible = true;
    this.route = this.routes.find((i) => i.id === item.id) || null;
  }

  createRoute(route: Route) {
    this.routesService
      .create(route)
      .subscribe(this.handlerResponseCrud('guardado'));
  }

  updateRoute(route: Route) {
    const { id } = route;
    delete route.id;
    this.routesService
      .update(id || 0, route)
      .subscribe(this.handlerResponseCrud('actualizado'));
  }

  deleteRoute(route: Route) {
    this.routesService
      .delete(route?.id || 0)
      .subscribe(this.handlerResponseCrud('eliminado'));
  }

  assignRoute(data: RouteResponse[]) {
    this.routes = data
    this.routesTable = this.routes.map(({
      id,
      nombre,
      kmItinerario1,
      kmItinerarioRepro1,
      kmItinerario2,
      kmItinerarioRepro2,
      kmItinerario3,
      kmItinerarioRepro3,
      kmItinerario4,
      kmItinerarioRepro4,
      inicioHabil,
      inicioSabado,
      inicioDomingo,
      finHabil,
      finSabado,
      finDomingo,
      itinerario1,
      itinerario2,
      itinerario3,
      itinerario4,
    }) => {
      const routeItem: Route = {
        id,
        nombre,
        kmItinerario1,
        kmItinerarioRepro1,
        kmItinerario2,
        kmItinerarioRepro2,
        kmItinerario3,
        kmItinerarioRepro3,
        kmItinerario4,
        kmItinerarioRepro4,
        inicioHabil,
        inicioSabado,
        inicioDomingo,
        finHabil,
        finSabado,
        finDomingo,
        itinerario1: itinerario1?.nombre,
        itinerario2: itinerario2?.nombre,
        itinerario3: itinerario3?.nombre,
        itinerario4: itinerario4?.nombre
      }
      return routeItem
    }
    )
  }

  showAlert(status: string, title: string, message: string) {
    this.messageService.add({
      severity: status,
      summary: title,
      detail: message,
    });
  }

  handlerResponseCrud(type: CrudAlertString) {
    return {
      next: () => {
        this.showAlert(
          'success',
          'Excelente! :)',
          `Se ha ${type} la información exitosamente`
        );
        this.getRoutes()
        this.resetForm = true
        this.modalVisible = false;
      },
      error: (error: any) => {
        this.resetForm = false
        this.showAlert('error', 'Ha ocurrido un error', error.error.message);
      },
    };
  }

}
