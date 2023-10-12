import {Pipe, PipeTransform} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {Status} from "../../model/status";

@Pipe({
  name: 'filterItems',
})
// koshelnikov: rename: filterByStatus or todoStatusFilter?
export class FilterItemsPipe implements PipeTransform {

  transform(items: ToDoListItem[] | null, filter: Status | null): ToDoListItem[] | null {
    if (items) {
      if (filter === null) {
        return items;
        // koshelnikov: Избыточный кода item.status === filter?
      } else if (filter === Status.COMPLETED) {
        return items.filter(item => item.status === Status.COMPLETED);
      } else if (filter === Status.IN_PROGRESS) {
        return items.filter(item => item.status === Status.IN_PROGRESS);
      }
    }
    return null;
  }

}
