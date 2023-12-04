import { NgModule } from '@angular/core';

import { CriteriaFormComponent } from './components/criteria-form/criteria-form.component';
import { CriteriaComponent } from './criteria.component';
import { CrudContentComponent } from '@app/modules/shared/components/crud/crud-content/crud-content.component';

@NgModule({
  imports: [CrudContentComponent],
  exports: [],
  declarations: [CriteriaFormComponent, CriteriaComponent],
  providers: [],
})
export class CriteriaModule { }
