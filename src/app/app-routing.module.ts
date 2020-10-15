import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutesModule } from 'projects/subpool/src/app/views/routes/routes.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { TouchModule } from './views/touch/touch.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'plumb',
    loadChildren: './views/js-plumb-engine/js-plumb-engine.module#JsPlumbEngineModule',
  },
  {
    path: 'ag-grid',
    loadChildren: './views/ag-grid/ag-grid.module#AgGridFileModule',
  },
  {
    path: 'active-reports',
    loadChildren: './views/active-reports-test/active-reports-test.module#ActiveReportsTestModule',
  },
  {
    path: 'sprad-js',
    loadChildren: './views/sprad-js/sprad-js.module#SpradJsModule',
    // component: SpradJsModule,
  },
  {
    path: 'we-chat',
    loadChildren: './views/we-chat-rad-packet/we-chat-rad-packet.module#WeChatRadPacketModule',
  },
  {
    path: 'sub-module',
    loadChildren: '../../projects/subpool/src/app/views/routes/routes.module#RoutesModule',
  },
  {
    path: 'zrender',
    loadChildren: './views/zrender-com/zrender-com.module#ZrenderComModule',
  },
  {
    path: 'echarts',
    loadChildren: './views/echarts-com/echarts-com.module#EchartsComModule'
  },
  {
    path: 'touch',
    loadChildren: './views/touch/touch.module#TouchModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RoutesModule,
    NgxEchartsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
