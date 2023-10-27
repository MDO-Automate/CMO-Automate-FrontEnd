import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TabViewModule } from 'primeng/tabview'
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

import { ConcilationRoutingModule } from './concilation-routing.module'

import { KmFilterComponent } from './components/km-filter/km-filter.component';
import { ConciliationComponent } from './conciliation.component'
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KmTableComponent } from '../../components/km-table/km-table.component';
import { GeneralTableComponent } from '../../components/general-table/general-table.component';

@NgModule({
  declarations: [
    ConciliationComponent,
    KmFilterComponent
  ],
  imports: [
    CommonModule,
    ConcilationRoutingModule,
    ReactiveFormsModule,

    TabViewModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    ButtonModule,
    BtnConfirmComponent,
    KmTableComponent,
    GeneralTableComponent
  ]
})
export class ConcilationModule { }
