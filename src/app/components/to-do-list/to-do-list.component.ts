import {Component, OnInit} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToDoListDataService} from "../../services/toDoListData/to-do-list-data.service";
import {ToastService} from "../../services/toast/toast.service";
import {Status} from "../../model/status";
import {Observable, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PathParamSharedService} from "../../services/shared/pathParam/path-param-shared.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  items$: Observable<ToDoListItem[]> | undefined;
  nextId = 0;
  isLoading = true;
  selectedFilter: Status | null = null;
  selectedId: number | null = null;

  protected readonly Status = Status;

  constructor(
    private toDoListDataService: ToDoListDataService,
    private toastService: ToastService,
    private pathParamService: PathParamSharedService,
    private route: ActivatedRoute,
  ) {
    this.route.params.pipe(tap(p => {
      if (+p['id'] === this.selectedId) {
        this.selectedId = null;
      }
    })).subscribe()
  }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500)
    this.items$ = this.getItems();

    this.items$.subscribe(items => {
        const lastItem = items.find(item => item.id === Math.max(...items.map(item => item.id)));
        if (lastItem) {
          this.nextId = lastItem.id + 1;
        }
      })

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
        complete: () => this.items$ = this.getItems(),
      });
    this.nextId++;
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

  getNextId(): number {
    return this.nextId;
  }

}
