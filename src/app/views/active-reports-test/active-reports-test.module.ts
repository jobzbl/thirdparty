import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveReportsTestRoutingModule } from './active-reports-test-routing.module';
import { ActiveReportsTabComponent } from './active-reports-tab/active-reports-tab.component';

import { ActiveReportsModule } from '@grapecity/activereports-angular';
import '@grapecity/activereports-localization';

@NgModule({
  declarations: [
    ActiveReportsTabComponent
  ],
  imports: [
    CommonModule,
    ActiveReportsTestRoutingModule,
    ActiveReportsModule
  ]
})
export class ActiveReportsTestModule { }
