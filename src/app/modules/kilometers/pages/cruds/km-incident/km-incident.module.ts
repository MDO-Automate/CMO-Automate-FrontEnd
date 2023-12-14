import { NgModule } from '@angular/core';
import { MessageService, SharedModule } from 'primeng/api';
import { KmIncidentComponent } from './km-incident.component';
import { KmIncidentFormComponent } from './components/km-incident-form/km-incident-form.component';
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component';
import { ButtonPrimaryComponent } from '@app/modules/shared/components/button-primary/button-primary.component';
import { CrudContentComponent } from '@app/modules/shared/components/crud/crud-content/crud-content.component';
import { CommonModule } from '@angular/common';
import { KmIncidentRoutingModule } from './km-incident-routing.module';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    BtnConfirmComponent,
    ButtonPrimaryComponent,
    CommonModule,
    KmIncidentRoutingModule,
    CrudContentComponent,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    ToastModule,
    CalendarModule,
  ],
  exports: [],
  declarations: [KmIncidentComponent, KmIncidentFormComponent],
  providers: [MessageService],
})
export class KmIncidentModule {}
