import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MessagesModule }     from 'primeng/messages';
import { TableModule }        from 'primeng/table'
import { TabViewModule }      from 'primeng/tabview'
import { ToastModule }        from 'primeng/toast'
import { MessageService }     from 'primeng/api'
import { ProgressBarModule }  from 'primeng/progressbar'
import { FileUploadModule }   from 'primeng/fileupload';


import { KmAnalysisComponent }      from './km-analysis.component'
import { KmAnalysisRoutingModule }  from './km-analysis-routing.module'
import { KmTableComponent }         from '../../components/km-table/km-table.component'
import { GeneralTableComponent }    from '../../components/general-table/general-table.component'
import { KmSumaryTableComponent }   from '../../components/kmElec-sumary-table/kmElec-sumary-table.component';
import { KmAnalysisUploadComponent } from './components/km-analysis-upload/km-analysis-upload.component';
import { TabsLayoutComponent } from './components/tabs-layout/tabs-layout.component';
import { BtnConfirmComponent } from '@app/modules/shared/components/btn-confirm/btn-confirm.component'

@NgModule({
  declarations: [
    KmAnalysisComponent,
    KmAnalysisUploadComponent,
    TabsLayoutComponent,
  ],
  imports: [
    CommonModule,
    KmAnalysisRoutingModule,
    TabViewModule,
    TableModule,
    ToastModule,
    ProgressBarModule,
    FileUploadModule,
    MessagesModule,

    KmTableComponent,
    GeneralTableComponent,
    KmSumaryTableComponent,
    BtnConfirmComponent,
  ],
  providers: [
    MessageService
  ]
})
export class KmAnalysisModule { }
