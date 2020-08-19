import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeChatRadPacketRoutingModule } from './we-chat-rad-packet-routing.module';
import { RadPacketAllotComponent } from './rad-packet-allot/rad-packet-allot.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RadPacketAllotComponent
  ],
  imports: [
    CommonModule,
    WeChatRadPacketRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class WeChatRadPacketModule { }
