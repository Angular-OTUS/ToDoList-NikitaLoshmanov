import {Injectable} from '@angular/core';
import {BehaviorSubject, shareReplay, switchMap, tap} from "rxjs";
import {TasksApiService} from "../api/tasks-api.service";
import {Task} from "../../model/task";

@Injectable({
  providedIn: 'root',
})
export class TaskStoreService {
  private readonly updateTasks$ = new BehaviorSubject<null>(null);

  readonly tasks$ = this.updateTasks$.pipe(
    switchMap(() => this.tasksBoardDataService.getTasks()),
    shareReplay(2),
  )

  constructor(
    private tasksBoardDataService: TasksApiService,
  ) { }

  addTask(task: Task) {
    this.tasksBoardDataService.addTask(task).subscribe(
      () => this.updateTasks$.next(null),
    )
  }

  updateTask(task: Task) {
    this.tasksBoardDataService.updateTask(task).subscribe(
      () => this.updateTasks$.next(null),
    )
  }

  deleteTask(id: number) {
    this.tasksBoardDataService.deleteTask(id).subscribe(
      () => this.updateTasks$.next(null),
    )
  }

  getNextId(): number {
    let nextId = 0;
    this.tasks$
      .pipe(
        tap(items => {
          const lastItem = items.find(item => item.id === Math.max(...items.map(item => item.id)));
          if (lastItem) {
            nextId = lastItem.id + 1;
          }
        }))
    return nextId;
  }

}
