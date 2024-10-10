import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './models/category';
@Pipe({
  name: 'showValInclusCh'
})
export class ShowValInclusChPipe implements PipeTransform {

  transform(categories: Category[], searchText: string): Category[] {
    if (!categories || !searchText) {
      return categories; // Return all categories if no searchText is provided
    }
    // Filter categories by title (case insensitive)
    return categories.filter(category =>
      category.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

}
