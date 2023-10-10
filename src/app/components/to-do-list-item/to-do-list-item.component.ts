import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {ToastService} from "../../services/toast/toast.service";
import {Status} from "../../model/status";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent implements OnInit{
  @Input() item?: ToDoListItem;
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() changeStatusEvent = new EventEmitter<number>();
  checked: boolean | undefined;


  constructor(
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  deleteItem(id?: number) {
    this.deleteItemEvent.emit(id);
    this.showInfoToast('INFO', 'Task was deleted')
  }

  goToItemView(item: ToDoListItem) {
    this.router.navigate([item.id], {
      relativeTo: this.route,
    });
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
