import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent/products-category-qpcomponent.component';


@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductComponentComponent,
    ProductsCategoryQPComponentComponent

  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule
  ]
})
export class ProductModuleModule { }
