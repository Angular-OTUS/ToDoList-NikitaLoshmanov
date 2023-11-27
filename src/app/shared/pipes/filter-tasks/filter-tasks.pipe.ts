import {Pipe, PipeTransform} from '@angular/core';
import {Task} from "../../model/task";
import {Status} from "../../model/status";

@Pipe({
  name: 'filterByTaskStatus',
})
export class FilterByTaskStatusPipe implements PipeTransform {

  transform(tasks: Task[] | null, filter: Status | null): Task[] | null {
    if (tasks) {
      if (filter === null) {
        return tasks;
      }
      return tasks.filter(task => task.status === filter);
    }
    return null;
  }

}
