import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpradJsComponent } from './sprad-js/sprad-js.component';


const routes: Routes = [
  {
    path: '',
    component: SpradJsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpradJsRoutingModule { }
