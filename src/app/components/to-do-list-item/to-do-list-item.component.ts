import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoListItem} from "../model/toDoListItem";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() item?: ToDoListItem;
  @Output() deleteItemEvent = new EventEmitter<number>();

  deleteItem(id?: number) {
    this.deleteItemEvent.emit(id);
  }

}
