import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsPlumbEngineRoutingModule } from './js-plumb-engine-routing.module';
import { PlumbComponent } from './plumb/plumb.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    PlumbComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    JsPlumbEngineRoutingModule,
    NgZorroAntdModule,
    DndModule,
    DragDropModule
  ]
})
export class JsPlumbEngineModule { }
