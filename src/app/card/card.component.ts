import { Component, EventEmitter, Input, Output } from '@angular/core';
import { shortList } from '../models/shortList';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id : number
  @Input() title : string
  @Input() image: string
  @Input() description : string
  @Input() available : boolean
  @Output() requested = new EventEmitter<shortList>(); 
  @Output() requestedFromProduct = new EventEmitter<shortList>();
  btText : string;

  @Input() name: string;

  @Input() categoryId: number;

  @Input() price: number;
  @Input() brand:string;
  @Input() promotion : number;

  showDescription(description: string) {
    alert(description);
  }

  sendDataToParent() {
    var shortlist = new shortList();
    shortlist.id = 5;
    shortlist.idUser = 5;
    shortlist.idElement = this.id;
    shortlist.typeElement = "category";
    this.requested.emit(shortlist);
  }
  sendDataToProductParent() {
    var shortlist = new shortList();
    shortlist.id = 5;
    shortlist.idUser = 5;
    shortlist.idElement = this.id;
    shortlist.typeElement = "produit";
    this.requestedFromProduct.emit(shortlist);
  }
}
