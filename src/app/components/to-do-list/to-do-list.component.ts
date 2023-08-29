import {Component} from '@angular/core';
import {ToDoListItem} from "../model/toDoListItem";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss', '../shared/shared.scss'],
})
export class ToDoListComponent {
  items: ToDoListItem[] = [];
  itemText: string = "";

  isInputEmpty(): boolean {
    return !this.itemText;
  }

  deleteItem(id: number) {
    this.items.filter((value, index, array) => {
      if (value.id === id) {
        array.splice(index, 1);
      }
    })
  }

  addItem(inputText: string) {
    let index = this.items.length + 1;
    this.items.push(new ToDoListItem(index, inputText))
    this.itemText = "";
  }

}
