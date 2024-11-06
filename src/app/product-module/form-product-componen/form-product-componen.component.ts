import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-form-product-componen',
  templateUrl: './form-product-componen.component.html',
  styleUrls: ['./form-product-componen.component.css']
})
export class FormProductComponenComponent {
  product: Product = {
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0,
  };
  list: Product[] = [];

  save() {
    this.product.id = this.list.length + 1;

    this.list.push(this.product)

    this.product = {
      id: 0,
      name: '',
      image: '',
      categoryId: 0,
      description: '',
      price: 0,
      brand: '',
      promotion: 0,
    };
  }
}
