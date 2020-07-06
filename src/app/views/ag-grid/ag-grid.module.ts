import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridRoutingModule } from './ag-grid-routing.module';
import { AgAgridZorroTableComponent } from './ag-agrid-zorro-table/ag-agrid-zorro-table.component';


@NgModule({
  declarations: [
    AgAgridZorroTableComponent
  ],
  imports: [
    CommonModule,
    AgGridRoutingModule
  ]
})
export class AgGridModule { }
