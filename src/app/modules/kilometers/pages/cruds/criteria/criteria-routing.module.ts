import { NgModule } from '@angular/core';
import { CriteriaComponent } from './criteria.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: '',
    component: CriteriaComponent
 }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriteriaRoutingModule { }
