import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserComponentComponent } from './user-component/user-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './form-user/form-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UserComponentComponent,
    FormUserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    ReactiveFormsModule
 
  ]
})
export class UserModuleModule { }
