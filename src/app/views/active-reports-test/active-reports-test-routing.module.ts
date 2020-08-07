import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveReportsTabComponent } from './active-reports-tab/active-reports-tab.component';

const routes: Routes = [
  {
    path: '',
    component: ActiveReportsTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveReportsTestRoutingModule { }
