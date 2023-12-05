import { NgModule } from '@angular/core';

import { CriteriaFormComponent } from './components/criteria-form/criteria-form.component';
import { CriteriaComponent } from './criteria.component';
import { CrudContentComponent } from '@app/modules/shared/components/crud/crud-content/crud-content.component';
import { CriteriaRoutingModule } from './criteria-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonPrimaryComponent } from '@app/modules/shared/components/button-primary/button-primary.component';
import { CommonModule } from '@angular/common';
import { MessageService, SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    BtnConfirmComponent,
    ButtonPrimaryComponent,
    CommonModule,
    CriteriaRoutingModule,
    CrudContentComponent,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    ToastModule,
  ],
  exports: [],
  declarations: [CriteriaFormComponent, CriteriaComponent],
  providers: [MessageService],
})
export class CriteriaModule { }
