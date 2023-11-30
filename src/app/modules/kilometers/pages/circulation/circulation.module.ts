import { NgModule } from "@angular/core";

import { CirculationComponent } from "./circulation.component";
import { TableCirculationsComponent } from "./components/table-circulations/table-circulations.component";
import { ButtonPrimaryComponent } from "@app/modules/shared/components/button-primary/button-primary.component";
import { CirculationFormComponent } from "./components/circulation-form/circulation-form.component";

import { CirculationRoutingModule } from "./circulation-routing.module";
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from "@angular/common";

import { MessageService } from 'primeng/api';
import { BtnConfirmComponent } from "@app/modules/shared/components/btn-confirm/btn-confirm.component";
import { CrudContentComponent } from "@app/modules/shared/components/crud/crud-content/crud-content.component";

@NgModule({
  declarations: [
    CirculationComponent,
    TableCirculationsComponent,
    CirculationFormComponent
  ],
  imports: [
    CommonModule,
    CirculationRoutingModule,
    TableModule,
    ButtonPrimaryComponent,
    BtnConfirmComponent,
    DialogModule,
    ToastModule,
    InputNumberModule,
    ReactiveFormsModule,
    DropdownModule,
    CrudContentComponent
  ],
  providers: [
    MessageService
  ]
})

export class CiculationModule {

}
