import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './product-module/products-category/products-category.component';
import { ProductsCategoryQPComponentComponent } from './product-module/products-category-qpcomponent/products-category-qpcomponent.component';
import { DetailsCategoryComponentComponent } from './details-category-component/details-category-component.component';


// sans / devant le path
const ROUTES : Routes = [
  {path:"home", component:HomeComponent, children:[
    {path:"details/:id", component:DetailsCategoryComponentComponent}
  ]},  
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"products/:id", component: ProductsCategoryComponent},
  {path: "products", component: ProductsCategoryQPComponentComponent},
  {path: "usermanagement", loadChildren:() => import('./user-module/user-module.module').then((m)=>m.UserModuleModule)},
  {path: "productmanagement", loadChildren:() => import('./product-module/product-module.module').then((m)=>m.ProductModuleModule)},
  {path: "providermanagement", loadChildren:()=> import('./provider-module/provider-module.module').then((m)=>m.ProviderModuleModule)},
  {path:"**", component:NotFoundPageComponent }




]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
 
})
export class AppRoutingModule {
 
 }
