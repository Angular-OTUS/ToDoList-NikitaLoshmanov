import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";

@Component({
  selector: 'app-to-do-list-item-edit',
  templateUrl: './to-do-list-item-edit.component.html',
  styleUrls: ['./to-do-list-item-edit.component.scss'],
})
export class ToDoListItemEditComponent {
  @Input() item!: ToDoListItem;
  @Output() updateItemEvent = new EventEmitter<ToDoListItem>();

  updateItem(item: ToDoListItem) {
    this.updateItemEvent.emit(item);
  }

}
