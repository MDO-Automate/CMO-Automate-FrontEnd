import { NgModule } from '@angular/core';
import { HolidayComponent } from './holiday.component';
import { HolidayFormComponent } from './components/holiday-form/holiday-form.component';
import { MessageService, SharedModule } from 'primeng/api';
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component';
import { ButtonPrimaryComponent } from '@app/modules/shared/components/button-primary/button-primary.component';
import { CommonModule } from '@angular/common';
import { CrudContentComponent } from '@app/modules/shared/components/crud/crud-content/crud-content.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { HolidayRoutingModule } from './holiday-routing.module';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    BtnConfirmComponent,
    ButtonPrimaryComponent,
    CommonModule,
    HolidayRoutingModule,
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
  declarations: [HolidayComponent, HolidayFormComponent],
  providers: [MessageService],
})
export class HolidayModule { }
