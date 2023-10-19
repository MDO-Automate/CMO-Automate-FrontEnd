import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'


import { FileUploadModule }   from 'primeng/fileupload'
import { TableModule }        from 'primeng/table'
import { TabViewModule }      from 'primeng/tabview'
import { ToastModule }        from 'primeng/toast'
import { MessageService }     from 'primeng/api'
import { ProgressBarModule }  from 'primeng/progressbar'
import { ConfirmPopupModule } from 'primeng/confirmpopup'

import { KmAnalysisComponent }      from './km-analysis.component'
import { KmAnalysisRoutingModule }  from './km-analysis-routing.module'
import { KmTableComponent }         from '../../components/km-table/km-table.component'
import { GeneralTableComponent }    from '../../components/general-table/general-table.component'
import { KmSumaryTableComponent }   from '../../components/kmElec-sumary-table/kmElec-sumary-table.component';
import { KmAnalysisUploadComponent } from './components/km-analysis-upload/km-analysis-upload.component';
import { TabsLayoutComponent } from './components/tabs-layout/tabs-layout.component';

@NgModule({
  declarations: [
    KmAnalysisComponent,
    KmAnalysisUploadComponent,
    TabsLayoutComponent,
  ],
  imports: [
    KmTableComponent,
    GeneralTableComponent,
    KmSumaryTableComponent,
    FileUploadModule,
    TabViewModule,
    TableModule,
    ToastModule,
    ProgressBarModule,
    CommonModule,
    KmAnalysisRoutingModule,
    ConfirmPopupModule
  ],
  providers: [
    MessageService
  ]
})
export class KmAnalysisModule { }
