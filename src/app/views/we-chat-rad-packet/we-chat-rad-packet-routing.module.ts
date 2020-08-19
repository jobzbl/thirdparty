import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadPacketAllotComponent } from './rad-packet-allot/rad-packet-allot.component';


const routes: Routes = [
  {
    path: '',
    component: RadPacketAllotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeChatRadPacketRoutingModule { }
