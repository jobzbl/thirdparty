import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpradJsRoutingModule } from './sprad-js-routing.module';
import { SpradJsComponent } from './sprad-js/sprad-js.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { SheetHeaderComponent } from './component/sheet-header/sheet-header.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpradJsComponent,
    SheetHeaderComponent
  ],
  imports: [
    CommonModule,
    SpradJsRoutingModule,
    SpreadSheetsModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class SpradJsModule { }
