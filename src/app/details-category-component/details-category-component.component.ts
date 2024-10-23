import { Component } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category-component',
  templateUrl: './details-category-component.component.html',
  styleUrls: ['./details-category-component.component.css']
})
export class DetailsCategoryComponentComponent {
  description : string;
  categories : Category[]= [
    {"id":1,"title":"Grand électroménager", 
      "image":"assets/images/categorie_electromenager.jpg", "description":"Grand électroménager", 
      "available":true},
      {"id":2,"title":"Petit électroménager", 
      "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Petit électroménager", 
      "available":true},
      {"id":3,"title":"Produits informatiques", 
      "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Produits informatiques", 
      "available":true},
      {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", 
      "description":"Smart Phones", "available":true},
      {"id":5,"title":"TV, images et son", 
      "image":"assets/images/categorie_tv_image_son.jpg", "description":"TV, images et son", 
      "available":true},
      {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", 
      "description":"Produits voiture","available":false},
  ]
  constructor(private ac : ActivatedRoute){}

  ngOnInit(){
    this.ac.params.subscribe(params =>
    {for (let category of this.categories){
      if(category.id == params['id'] )
        this.description = category.description;
    } }
  )
  }
}