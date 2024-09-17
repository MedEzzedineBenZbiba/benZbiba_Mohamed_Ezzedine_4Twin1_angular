import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title : string ;
  listCategory: Array<Category>

  constructor() {
  }

  ngOnInit() {
    this.title = "Welcome to TwinStore"
    this.listCategory = [
      {id:1, name:'clothing', nbrLike: 10, available: true, picture: 'https://img.freepik.com/vecteurs-libre/lettre-coloree-creation-logo-degrade_474888-2309.jpg?t=st=1726585633~exp=1726589233~hmac=deeac9c69d028b193f7bd46c03f467c1e7d64939298171178a05de40ba19be5f&w=740'},
      {id:1, name:'clothing', nbrLike: 10, available: true, picture: 'https://img.freepik.com/vecteurs-libre/lettre-coloree-creation-logo-degrade_474888-2309.jpg?t=st=1726585633~exp=1726589233~hmac=deeac9c69d028b193f7bd46c03f467c1e7d64939298171178a05de40ba19be5f&w=740'},
    ]

  }
}
