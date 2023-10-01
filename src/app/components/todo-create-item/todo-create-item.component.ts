import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToastService} from "../../services/toast/toast.service";
import {Status} from "../../model/status";

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss'],
})
export class TodoCreateItemComponent {
  itemText = "";
  itemDescription = "";
  @Input() index: number | undefined;
  @Output() save = new EventEmitter<ToDoListItem>();

  constructor(
    private toastService: ToastService,
  ) {}

  newItem() {
    if (this.index) {
      this.save.emit(new ToDoListItem(this.index, this.itemText, this.itemDescription, Status.IN_PROGRESS));
    }
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

}
