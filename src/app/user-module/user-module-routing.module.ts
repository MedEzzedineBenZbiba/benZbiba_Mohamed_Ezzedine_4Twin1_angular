import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [{path:"", component:UserComponentComponent},
                        {path:"addUser", component: FormUserComponent},
                        {path:"addUser/:id", component: FormUserComponent},
                        {path:"detail/:id", component: UserDetailComponent},

                               ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
