import { NgModule } from '@angular/core';
import { MessageService, SharedModule } from 'primeng/api';
import { SchedulesItineraryRoutingModule } from './schedules-itinerary-routing.module';
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component';
import { ButtonPrimaryComponent } from '@app/modules/shared/components/button-primary/button-primary.component';
import { CommonModule } from '@angular/common';
import { CrudContentComponent } from '@app/modules/shared/components/crud/crud-content/crud-content.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { SchedulesItineraryComponent } from './schedules-itinerary.component';
import { SchedulesItineraryFormComponent } from './components/schedules-itinerary-form/schedules-itinerary-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    SchedulesItineraryComponent,
    SchedulesItineraryFormComponent
  ],
  imports: [
    BtnConfirmComponent,
    ButtonPrimaryComponent,
    SchedulesItineraryRoutingModule,
    CommonModule,
    CrudContentComponent,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    ToastModule,
    InputMaskModule
  ],
  exports: [],
  providers: [MessageService],
})
export class SchedulesItineraryModule {}
