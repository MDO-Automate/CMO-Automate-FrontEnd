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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KilometersRoutingModule {}
