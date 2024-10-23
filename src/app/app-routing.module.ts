import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent/products-category-qpcomponent.component';
import { DetailsCategoryComponentComponent } from './details-category-component/details-category-component.component';

const ROUTES : Routes = [
  {path:"home", component:HomeComponent, children:[
    {path:"details/:id", component:DetailsCategoryComponentComponent}
  ]},  
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"products/:id", component: ProductsCategoryComponent},
  {path: "products", component: ProductsCategoryQPComponentComponent},
  {path:"**", component:NotFoundPageComponent }




]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule {
 
 }
