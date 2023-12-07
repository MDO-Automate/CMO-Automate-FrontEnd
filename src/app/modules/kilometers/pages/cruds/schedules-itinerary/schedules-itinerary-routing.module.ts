import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesItineraryComponent } from './schedules-itinerary.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulesItineraryComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesItineraryRoutingModule { }
