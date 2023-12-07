import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/km-analysis/km-analysis.module').then(m => m.KmAnalysisModule)
  },
  {
    path: 'conciliacion',
    loadChildren: () => import('./pages/concilation/concilation.module').then(m => m.ConcilationModule)
  },
  {
    path: 'circulacion',
    loadChildren: () => import('./pages/cruds/circulation/circulation.module').then(m => m.CiculationModule)
  },
  {
    path: 'criterio',
    loadChildren: () => import('./pages/cruds/criteria/criteria.module').then(m => m.CriteriaModule)
  },
  {
    path: 'festivo',
    loadChildren: () => import('./pages/cruds/holiday/holiday.module').then(m => m.HolidayModule)
  },
  {
    path: 'itinerario',
    loadChildren: () => import('./pages/cruds/itinerary/itinerary.module').then(m => m.ItineraryModule)
  },
  {
    path: 'horarios-itinerario',
    loadChildren: () => import('./pages/cruds/schedules-itinerary/schedules-itinerary.module').then(m => m.SchedulesItineraryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KilometersRoutingModule {}
