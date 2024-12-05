import { Component } from '@angular/core';
import { Product } from '../models/product';
import { shortList } from '../models/shortList';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {
      id: 1,
      name: 'Cuisinière',
      image: 'assets/images/lave_vaisselle.jpg',
      description: '699 dt',
      promotion: 0,
      categoryId: 1,
      price: 0,
      brand: 'dj',
    },
    {
      id: 2,
      name: 'Réfrigérateur',
      image: 'assets/images/refrigerateur-lg.jpg',
      description: '1500 dt',
      promotion: 0,
      categoryId: 1,
      price: 0,
      brand: 'dj',
    },
    {
      id: 3,
      name: 'Robot Pétrin',
      image: 'assets/images/refrigerateur_samsung.jpeg',
      description: '430 dt',
      promotion: 0,
      categoryId: 2,
      price: 0,
      brand: 'dj',
    },
    {
      id: 4,
      name: 'Fer à repasser',
      image: 'assets/images/hachoir.jpg',
      description: '130 dt',
      promotion: 0,
      categoryId: 2,
      price: 0,
      brand: 'dj',
    },
    {
      id: 5,
      name: 'Oppo',
      image: 'assets/images/oppo_smart.jpg',
      description: '920 dt',
      promotion: 0,
      categoryId: 4,
      price: 0,
      brand: 'dj',
    },
    {
      id: 6,
      name: 'TV Téléfunkun',
      image: 'assets/images/categorie_tv_image_son.jpg',
      description: '845 dt',
      promotion: 0,
      categoryId: 5,
      price: 0,
      brand: 'dj',
    },
  ];

  shortlist: shortList[] = [];

  getRequest(shortListEnvoyer : shortList) {
    this.shortlist.push(shortListEnvoyer);
    alert("bonjour")
  }

}
