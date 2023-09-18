import {Component, OnInit} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToDoListDataService} from "../../services/toDoListData/to-do-list-data.service";
import {ToastService} from "../../services/toast/toast.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  itemText = "";
  itemDescription = "";
  isLoading = true;
  selectedItemId: number | null = null;
  editingItem: ToDoListItem | undefined;
  editedItem: ToDoListItem | undefined

  constructor(
    private toDoListDataService: ToDoListDataService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500)
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

  isInputEmpty(): boolean {
    return !this.itemText;
  }

  clearSelection() {
    this.selectedItemId = null;
  }

  deleteItem(id: number) {
    this.toDoListDataService.deleteItem(id);
  }

  getItem(id: number | null): ToDoListItem | undefined {
    return this.toDoListDataService.getItem(id);
  }

  selectItem(id: number) {
    this.selectedItemId = id;
  }

  addItem(inputText: string, description: string) {
    const index = this.toDoListDataService.getData().length + 1;
    const item: ToDoListItem = new ToDoListItem(index, inputText, description)
    this.toDoListDataService.addItem(item);
    this.itemText = "";
    this.itemDescription = "";
  }

  editItem(item: ToDoListItem) {
    this.editingItem = item;
    this.editedItem = item;
  }

  updateItem(id: number, inputText: string) {
    const updatedItem = this.getItem(id);
    if (updatedItem) {
      updatedItem.text = inputText;
    }
    this.editingItem = undefined;
    this.editedItem = undefined;
  }

  getItems(): ToDoListItem[] {
    return this.toDoListDataService.getData();
  }

}
