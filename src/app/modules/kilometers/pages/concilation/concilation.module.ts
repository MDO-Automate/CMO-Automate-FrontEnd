import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcilationRoutingModule } from './concilation-routing.module';
import { ConciliationComponent } from './conciliation.component';


@NgModule({
  declarations: [
    ConciliationComponent
  ],
  imports: [
    CommonModule,
    ConcilationRoutingModule
  ]
})
export class ConcilationModule { }
