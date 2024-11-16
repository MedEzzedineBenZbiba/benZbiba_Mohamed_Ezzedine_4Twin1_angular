import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-form-product-componen',
  templateUrl: './form-product-componen.component.html',
  styleUrls: ['./form-product-componen.component.css']
})
export class FormProductComponenComponent implements OnInit {
  

  productForm : FormGroup;
  product : Product ;
  idProduct = 0;
  listProduct : Product[] ;

  ngOnInit(): void {
    this.listProduct = [];
    this.productForm = new FormGroup({
      name : new FormControl('', [Validators.required , Validators.minLength(5), Validators.pattern("[a-zA-Z]*") ]),
      image : new FormControl(''),
      categoryId : new FormControl('', [Validators.required , ]),
      description : new FormControl(''),
      price : new FormControl('', [Validators.required, Validators.pattern("^(\\d+)(\\.\\d+)?$") ]),
      brand : new FormControl(''),
      promotion : new FormControl('', [ Validators.max(100), Validators.pattern("^(0|[1-9][0-9]?)$")])
    })
  }


  save(): void {
    this.product = this.productForm.getRawValue();
    this.product.id = this.idProduct + 1 ;
    this.listProduct.push(this.product);
    this.productForm.reset();
    console.log(this.listProduct)
  }










  // Template driven form
  // product: Product = {
  //   id: 0,
  //   name: '',
  //   image: '',
  //   categoryId: 0,
  //   description: '',
  //   price: 0,
  //   brand: '',
  //   promotion: 0,
  // };
  // list: Product[] = [];

  // save() {
  //   this.product.id = this.list.length + 1;

  //   this.list.push(this.product)

  //   this.product = {
  //     id: 0,
  //     name: '',
  //     image: '',
  //     categoryId: 0,
  //     description: '',
  //     price: 0,
  //     brand: '',
  //     promotion: 0,
  //   };
  // }
}
