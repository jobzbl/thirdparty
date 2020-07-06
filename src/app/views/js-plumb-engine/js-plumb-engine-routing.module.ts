import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlumbComponent } from './plumb/plumb.component';

const routes: Routes = [
  {
    path: '',
    component: PlumbComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsPlumbEngineRoutingModule { }
