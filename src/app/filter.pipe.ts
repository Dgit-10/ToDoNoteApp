import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (!value) return [];
    if (!searchText) return value;

    searchText = searchText.toLowerCase();
    return value.filter((item: any) => {
      return item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText);
    });
  }
}
