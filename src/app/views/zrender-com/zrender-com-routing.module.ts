import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZrenderPageComponent } from './zrender-page/zrender-page.component';


const routes: Routes = [
  {
    path: '',
    component: ZrenderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZrenderComRoutingModule { }
