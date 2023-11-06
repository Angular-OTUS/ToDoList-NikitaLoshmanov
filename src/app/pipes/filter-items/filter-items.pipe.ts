import {Pipe, PipeTransform} from '@angular/core';
import {Task} from "../../shared/model/task";
import {Status} from "../../shared/model/status";

@Pipe({
  name: 'filterByItemStatus',
})
export class FilterByItemStatusPipe implements PipeTransform {

  transform(items: Task[] | null, filter: Status | null): Task[] | null {
    if (items) {
      if (filter === null) {
        return items;
      }
      return items.filter(item => item.status === filter);
    }
    return null;
  }

}
