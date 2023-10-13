import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToastService} from "../../services/toast/toast.service";
import {Status} from "../../model/status";
import {Router} from "@angular/router";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit {
  @Input() item!: ToDoListItem;
  @Input() selectedId: number | null = null;
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() changeStatusEvent = new EventEmitter<ToDoListItem>();
  @Output() updateItemEvent = new EventEmitter<ToDoListItem>();

  checked: boolean | undefined;
  editingItem: ToDoListItem | undefined;

  constructor(
    private toastService: ToastService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.item) {
      this.checked = this.item.status !== Status.IN_PROGRESS;
    }
  }

  goToItemView(item: ToDoListItem) {
    this.router.navigate(['/tasks', item.id] );
  }

  setEditingItem(item: ToDoListItem) {
    this.editingItem = item;
  }

  deleteItem(id?: number) {
    this.deleteItemEvent.emit(id);
    this.showInfoToast('INFO', 'Task was deleted')
  }

  updateItem(item: ToDoListItem) {
    this.updateItemEvent.emit(item);
    this.editingItem = undefined;
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

  changeStatus() {
    if (this.item) {
      this.checked = this.item.status !== Status.IN_PROGRESS;
      this.item.status = this.item.status === Status.COMPLETED ? Status.IN_PROGRESS : Status.COMPLETED;
      this.changeStatusEvent.emit(this.item);
    }
  }

}
