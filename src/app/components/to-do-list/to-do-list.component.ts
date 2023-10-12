import {Component, OnInit} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToDoListDataService} from "../../services/toDoListData/to-do-list-data.service";
import {ToastService} from "../../services/toast/toast.service";
import {Status} from "../../model/status";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  items!: ToDoListItem[];
  item!: ToDoListItem;
  isLoading = true;
  selectedId: number | null = null;
  editingItem: ToDoListItem | undefined;
  // koshelnikov: не понятная переменная
  editedItem: ToDoListItem | undefined;
  selectedFilter: Status | null = null;

  protected readonly Status = Status;

  constructor(
    private toDoListDataService: ToDoListDataService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    console.log('Init toDoList component')
    // koshelnikov: для чего этот кусок кода?
    setTimeout(() => this.isLoading = false, 500)
    this.getItems();
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

  addItem(item: ToDoListItem) {
    this.toDoListDataService.addItem(item)
      .subscribe({
        next: (v) => this.item = v,
        error: (e) => console.log(e),
        complete: () => this.getItems(),
      });
  }

  deleteItem(id: number) {
    this.toDoListDataService.deleteItem(id)
      .subscribe({
        next: (v) => this.item = v,
        error: (e) => console.log(e),
        complete: () => this.getItems(),
      });
  }

  // koshelnikov: rename setEditItem
  editItem(item: ToDoListItem) {
    this.editingItem = item;
    this.editedItem = item;
  }

  updateItem(item: ToDoListItem) {
    this.toDoListDataService.updateItem(item)
      .subscribe({
        next: (v) => this.item = v,
        error: (e) => console.log(e),
        complete: () => this.getItems(),
      });
    this.editingItem = undefined;
    this.editedItem = undefined;
    this.showInfoToast('INFO', 'Task was updated');
  }

  changeStatus(id: number) {
    this.toDoListDataService.getItemById(id)
      .subscribe({
          next: (v) =>  {
            v.status = v.status === Status.COMPLETED ? Status.IN_PROGRESS : Status.COMPLETED;
            this.toDoListDataService.updateItem(v).subscribe(updated => this.item = updated);
          },
          error: (e) => console.log(e),
          complete: () => this.getItems(),
        },
      );
  }

  getItems() {
    this.toDoListDataService.getItems()
      .subscribe(items => this.items = items);
  }

  getLastId(): number {
    const lastItem = this.items.find(item => item.id === Math.max(...this.items.map(it => it.id)))
    return lastItem ? lastItem.id : 0;
  }

}
