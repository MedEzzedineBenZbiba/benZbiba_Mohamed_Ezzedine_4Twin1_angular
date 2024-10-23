import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderModuleRoutingModule } from './provider-module-routing.module';
import { ProviderComponentComponent } from './provider-component/provider-component.component';


@NgModule({
  declarations: [
    ProviderComponentComponent
  ],
  imports: [
    CommonModule,
    ProviderModuleRoutingModule
  ]
})
export class ProviderModuleModule { }
