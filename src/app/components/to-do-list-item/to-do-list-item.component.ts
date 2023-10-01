import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToastService} from "../../services/toast/toast.service";
import {Status} from "../../model/status";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit{
  @Input() item?: ToDoListItem;
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() changeStatusEvent = new EventEmitter<number>();
  @Output() selectItemEvent = new EventEmitter<ToDoListItem>();
  checked: boolean | undefined;


  constructor(
    private toastService: ToastService,
  ) {}


  deleteItem(id?: number) {
    this.deleteItemEvent.emit(id);
  }

  selectItem(item: ToDoListItem) {
    this.selectItemEvent.emit(item);
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

  changeStatus() {
    if (this.item) {
      this.checked = this.item.status !== Status.IN_PROGRESS;
      this.changeStatusEvent.emit(this.item.id);
    }
  }

  ngOnInit(): void {
    if (this.item) {
      this.checked = this.item.status !== Status.IN_PROGRESS;
    }
  }

}
