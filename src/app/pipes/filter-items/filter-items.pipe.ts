import {Pipe, PipeTransform} from '@angular/core';
import {ToDoListItem} from "../../model/to-do-list-item";
import {Status} from "../../model/status";

@Pipe({
  name: 'filterByItemStatus',
})
export class FilterByItemStatusPipe implements PipeTransform {

  transform(items: ToDoListItem[] | null, filter: Status | null): ToDoListItem[] | null {
    if (items) {
      if (filter === null) {
        return items;
      }
      return items.filter(item => item.status === filter);
    }
    return null;
  }

}
