import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserComponentComponent } from './user-component/user-component.component';


@NgModule({
  declarations: [
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
