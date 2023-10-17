import {Component, OnInit} from '@angular/core';
import {ToDoListItem} from "../../model/to-do-list-item";
import {ToDoListDataService} from "../../services/toDoListData/to-do-list-data.service";
import {ToastService} from "../../services/toast/toast.service";
import {Status} from "../../model/status";
import {async, Observable} from "rxjs";
import {PathParamSharedService} from "../../services/shared/pathParam/path-param-shared.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  items$: Observable<ToDoListItem[]> | undefined;
  nextId: number | undefined;
  isLoading = true;
  selectedFilter: Status | null = null;
  selectedId: number | null = null;

  protected readonly Status = Status;

  constructor(
    private toDoListDataService: ToDoListDataService,
    private toastService: ToastService,
    private pathParamService: PathParamSharedService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500)
    this.items$ = this.getItems();
    this.nextId = this.toDoListDataService.getNextId();
    this.pathParamService.onRequestIdParam
      .subscribe(id => this.selectedId = id);
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

  addItem(item: ToDoListItem) {
    this.toDoListDataService.addItem(item)
      .subscribe({
        error: (e) => console.log(e),
        complete: () =>{
          this.items$ = this.getItems();
          this.nextId = this.toDoListDataService.getNextId();
        },
      });
  }

  deleteItem(id: number) {
    this.toDoListDataService.deleteItem(id)
      .subscribe({
        error: (e) => console.log(e),
        complete: () => this.items$= this.getItems(),
      });
  }

  updateItem(item: ToDoListItem) {
    this.toDoListDataService.updateItem(item)
      .subscribe({
        error: (e) => console.log(e),
        complete: () => this.items$= this.getItems(),
      });
    this.showInfoToast('INFO', 'Task was updated');
  }

  getItems(): Observable<ToDoListItem[]> {
    return this.toDoListDataService.getItems();
  }

  setFilter(value: Status | null) {
    this.selectedFilter = value;
  }

  getNextId(): number | undefined {
    return this.nextId;
  }

  protected readonly async = async;
  protected readonly length = length;
}
