import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgAgridZorroTableComponent } from './ag-agrid-zorro-table/ag-agrid-zorro-table.component';

const routes: Routes = [
  {
    path: '',
    component: AgAgridZorroTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGridRoutingModule { }
