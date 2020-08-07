import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpradJsRoutingModule } from './sprad-js-routing.module';
import { SpradJsComponent } from './sprad-js/sprad-js.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';

@NgModule({
  declarations: [
    SpradJsComponent
  ],
  imports: [
    CommonModule,
    SpradJsRoutingModule,
    SpreadSheetsModule
  ]
})
export class SpradJsModule { }
