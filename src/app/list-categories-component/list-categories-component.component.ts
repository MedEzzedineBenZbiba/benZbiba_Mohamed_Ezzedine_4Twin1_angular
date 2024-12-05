import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { Category } from '../models/category';
import { Pipe, PipeTransform } from '@angular/core';
import { shortList } from '../models/shortList';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css'],
})
export class ListCategoriesComponentComponent  implements AfterViewInit{

  title: string = '';
  shortlist: shortList[] = [];
  
  @ViewChildren(CardComponent) 
  private children = new  QueryList<CardComponent>  ;

  ngAfterViewInit(): void {
    this.children.forEach((child)=> {
      child.btText = "voir produit"
    })
  }

  categories: Category[] = [
    {
      id: 1,
      title: 'Grand électroménager',
      image: 'assets/images/categorie_electromenager.jpg',
      description: 'Grand électroménager',
      available: true,
    },
    {
      id: 2,
      title: 'Petit électroménager',
      image: 'assets/images/categorie_petit_electromenager.jpg',
      description: 'Petit électroménager',
      available: true,
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/images/categorie_produits_informatiques.jpg',
      description: 'Produits informatiques',
      available: true,
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/images/categorie_smartPhone.jpg',
      description: 'Smart Phones',
      available: true,
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/images/categorie_tv_image_son.jpg',
      description: 'TV, images et son',
      available: true,
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/images/produits_nettoyages.jpg',
      description: 'Produits voiture',
      available: false,
    },
  ];

  showDescription(description: string) {
    alert(description);
  }

  getRequest(shortlistElementEnvoyer: shortList) {
    let exist ;
  
    for (const element of this.shortlist) {
      if (
        element.id === shortlistElementEnvoyer.id &&
        element.idElement === shortlistElementEnvoyer.idElement &&
        element.typeElement === shortlistElementEnvoyer.typeElement
      ) {
        exist = true;
        break; // Exit the loop immediately
      }
    }
  
    if (exist) return;
  
    this.shortlist.push(shortlistElementEnvoyer);
    console.log(this.shortlist);
  }

  
  


}
