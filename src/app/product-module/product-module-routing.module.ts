import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';
import { FormProductComponenComponent } from './form-product-componen/form-product-componen.component';

const routes: Routes = [
  {path: "addProduct", component: FormProductComponenComponent},
  {path:"", component: ProductComponentComponent}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
