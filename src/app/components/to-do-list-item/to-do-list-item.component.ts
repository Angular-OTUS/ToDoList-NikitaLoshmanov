import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToastService} from "../../services/toast/toast.service";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() item?: ToDoListItem;
  @Output() deleteItemEvent = new EventEmitter<number>();

  constructor(
    private toastService: ToastService,
  ) {}


  deleteItem(id?: number) {
    this.deleteItemEvent.emit(id);
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

}
