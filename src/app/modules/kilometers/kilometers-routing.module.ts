import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'analisis-km',
    loadChildren: () => import('../kilometers/pages/km-analysis/km-analysis.module').then(m => m.KmAnalysisModule)
  },
  {
    path: 'conciliacion',
    loadChildren: () => import('../kilometers/pages/concilation/concilation.module').then(m => m.ConcilationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KilometersRoutingModule { }
