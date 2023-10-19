import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KmAnalysisComponent } from './km-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: KmAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KmAnalysisRoutingModule { }
