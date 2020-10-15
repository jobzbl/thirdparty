import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouchTestComponent } from './touch-test/touch-test.component';


const routes: Routes = [
  {
    path: '',
    component: TouchTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouchRoutingModule { }
