import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartsComponent } from './echarts/echarts.component';


const routes: Routes = [
  {
    path: '',
    component: EchartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartsComRoutingModule { }
