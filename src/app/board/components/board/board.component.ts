import {Component} from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {Task} from "../../../shared/model/task";
import {Status} from "../../../shared/model/status";
import {TaskStoreService} from "../../../shared/services/store/task-store.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  headerText = $localize`:header|header text:Board`;
  tasks$: Observable<Task[]>;
  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];

  private readonly filterSubject$ = new BehaviorSubject<{taskStatus: string}>({taskStatus: ''});

  getTasksByStatus(status: string): Observable<Task[]> {
    return this.filterSubject$.pipe(
      switchMap((filter) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.tasks$.pipe(
          map((tasks) => {
            if (filter.taskStatus) {
              return tasks.filter((t) => t.status === filter.taskStatus);
            } else {
              return tasks;
            }
          }),
          map((filteredTasks) => filteredTasks.filter((t) => t.status === status)),
        ),
      ),
    );
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      if (event.container.data) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      }
    } else {
      if (event.container.data) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        this.updateStatus(event.container.data[event.currentIndex], event.previousContainer.id, event.container.id);
      }
    }
  }

  private updateStatus(task: Task, prevContainerId: string, currContainerId: string) {
    if (prevContainerId !== currContainerId) {
      if (currContainerId === 'cdk-drop-list-0') {
        task.status = Status.TODO;
      } else if (currContainerId === 'cdk-drop-list-1') {
        task.status = Status.IN_PROGRESS;
      } else if (currContainerId === 'cdk-drop-list-2') {
        task.status = Status.DONE;
      }
      this.taskStoreService.updateTask(task);
    }
  }

  constructor(
    private taskStoreService: TaskStoreService,
  ) {
    this.tasks$ = this.taskStoreService.tasks$;
    this.getTasksByStatus(Status.TODO).subscribe(tasks => {
      this.todoTasks = tasks;
    });
    this.getTasksByStatus(Status.IN_PROGRESS).subscribe(tasks => {
      this.inProgressTasks = tasks;
    });
    this.getTasksByStatus(Status.DONE).subscribe(tasks => {
      this.doneTasks = tasks;
    });
  }

}
