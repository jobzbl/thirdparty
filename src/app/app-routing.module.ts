import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeChatRadPacketModule } from './views/we-chat-rad-packet/we-chat-rad-packet.module';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
