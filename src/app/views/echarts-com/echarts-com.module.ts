import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartsComRoutingModule } from './echarts-com-routing.module';
import { EchartsComponent } from './echarts/echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    EchartsComponent
  ],
  imports: [
    CommonModule,
    EchartsComRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgZorroAntdModule
  ]
})
export class EchartsComModule { }
