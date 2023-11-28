import { RouterModule, Routes } from "@angular/router";
import { CirculationComponent } from "./circulation.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
{
  path: '',
  component: CirculationComponent
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CirculationRoutingModule {}
