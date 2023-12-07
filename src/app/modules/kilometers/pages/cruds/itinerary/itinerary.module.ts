import { NgModule } from '@angular/core';
import { MessageService, SharedModule } from 'primeng/api';
import { ItineraryComponent } from './itinerary.component';
import { ItineraryFormComponent } from './components/itinerary-form/itinerary-form.component';
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component';
import { ButtonPrimaryComponent } from '@app/modules/shared/components/button-primary/button-primary.component';
import { CommonModule } from '@angular/common';
import { CrudContentComponent } from '@app/modules/shared/components/crud/crud-content/crud-content.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ItineraryRoutingModule } from './itinerary-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  imports: [
    BtnConfirmComponent,
    ButtonPrimaryComponent,
    CommonModule,
    ItineraryRoutingModule,
    CrudContentComponent,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    ToastModule,
  ],
  declarations: [ItineraryComponent, ItineraryFormComponent],
  providers: [MessageService],
})
export class ItineraryModule {}