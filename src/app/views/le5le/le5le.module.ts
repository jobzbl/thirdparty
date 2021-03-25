import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Le5leRoutingModule } from './le5le-routing.module';
import { TopologyComponent } from './topology/topology.component';


@NgModule({
  declarations: [
    TopologyComponent
  ],
  imports: [
    CommonModule,
    Le5leRoutingModule
  ]
})
export class Le5leModule { }
