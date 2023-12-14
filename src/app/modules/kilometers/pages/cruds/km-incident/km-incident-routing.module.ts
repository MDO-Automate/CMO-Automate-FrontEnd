import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KmIncidentComponent } from './km-incident.component';

const routes: Routes = [
  {
    path: '',
    component: KmIncidentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KmIncidentRoutingModule { }
