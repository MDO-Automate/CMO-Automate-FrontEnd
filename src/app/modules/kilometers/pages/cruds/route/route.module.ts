import { NgModule } from '@angular/core';
import { MessageService, SharedModule } from 'primeng/api';
import { RouteComponent } from './route.component';
import { RouteFormComponent } from './components/route-form/route-form.component';
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component';
import { ButtonPrimaryComponent } from '@app/modules/shared/components/button-primary/button-primary.component';
import { RouteRoutingModule } from './route-routing.module';
import { CommonModule } from '@angular/common';
import { CrudContentComponent } from '@app/modules/shared/components/crud/crud-content/crud-content.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    BtnConfirmComponent,
    ButtonPrimaryComponent,
    RouteRoutingModule,
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
  declarations: [RouteComponent, RouteFormComponent],
  providers: [MessageService],
})
export class RouteModule { }
