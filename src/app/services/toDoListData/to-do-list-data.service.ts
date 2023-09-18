import {Injectable} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";

@Injectable({
  providedIn: 'root',
})
export class ToDoListDataService {
  private items: ToDoListItem[] = [];

  setData(items: ToDoListItem[]) {
    this.items = items;
  }

  getData(): ToDoListItem[] {
    return this.items;
  }

  addItem(item: ToDoListItem) {
    this.items.push(item);
  }

  deleteItem(id: number) {
    this.items.filter((value, index, array) => {
      if (value.id === id) {
        array.splice(index, 1);
      }
    })
  }

  getItem(id: number | null): ToDoListItem | undefined {
    return this.items.find(item => item.id === id);
  }

}
