import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesPageComponent } from './routes-page/routes-page.component';
const provider = [];

@NgModule({
  declarations: [
    RoutesPageComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  providers: provider,
})
export class RoutesModule { }
@NgModule({}) // 公布次module
export class TimeInsightsSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RoutesModule,
      providers: provider
    };
  }
}
