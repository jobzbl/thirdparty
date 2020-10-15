import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouchRoutingModule } from './touch-routing.module';
import { TouchTestComponent } from './touch-test/touch-test.component';


@NgModule({
  declarations: [
    TouchTestComponent
  ],
  imports: [
    CommonModule,
    TouchRoutingModule
  ]
})
export class TouchModule { }
