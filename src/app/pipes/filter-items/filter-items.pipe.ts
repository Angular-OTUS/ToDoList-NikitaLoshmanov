import {Pipe, PipeTransform} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {Status} from "../../model/status";

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {

  transform(items: ToDoListItem[], filter: Status | null): ToDoListItem[] {
    if (filter === null) {
      return items;
    } else if (filter === Status.COMPLETED) {
      return items.filter(item => item.status === Status.COMPLETED);
    } else if (filter === Status.IN_PROGRESS) {
      return items.filter(item => item.status === Status.IN_PROGRESS);
    }
    return items;
  }

}
