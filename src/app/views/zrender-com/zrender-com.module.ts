import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZrenderComRoutingModule } from './zrender-com-routing.module';
import { ZrenderPageComponent } from './zrender-page/zrender-page.component';


@NgModule({
  declarations: [
    ZrenderPageComponent
  ],
  imports: [
    CommonModule,
    ZrenderComRoutingModule,
  ]
})
export class ZrenderComModule { }
