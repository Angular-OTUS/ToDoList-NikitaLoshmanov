import {Component, OnInit} from '@angular/core';
import {ToDoListItem} from "../model/toDoListItem";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  items: ToDoListItem[] = [];
  itemText = "";
  itemDescription = "";
  isLoading = true;
  selectedItemId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500)
  }

  isInputEmpty(): boolean {
    return !this.itemText;
  }

  clearSelection() {
    this.selectedItemId = null;
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

  selectItem(id: number) {
    this.selectedItemId = id;
  }

  addItem(inputText: string, description: string) {
    const index = this.items.length + 1;
    this.items.push(new ToDoListItem(index, inputText, description))
    this.itemText = "";
    this.itemDescription = "";
  }

}
