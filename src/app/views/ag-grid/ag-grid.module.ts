import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridRoutingModule } from './ag-grid-routing.module';
import { AgAgridZorroTableComponent } from './ag-agrid-zorro-table/ag-agrid-zorro-table.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { PointsCustomHeaderComponent } from './renderer/points-custom-header/points-custom-header.component';
import { TableDetailsTextComponent } from './renderer/table-details-text/table-details-text.component';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AgAgridZorroTableComponent,
    PointsCustomHeaderComponent,
    TableDetailsTextComponent
  ],
  imports: [
    CommonModule,
    AgGridRoutingModule,
    AgGridModule.withComponents([]),
    NgZorroAntdModule,
    FormsModule,
    DndModule,
    DragDropModule
  ],
  entryComponents: [
    PointsCustomHeaderComponent,
    TableDetailsTextComponent
  ]
})
export class AgGridFileModule { }
