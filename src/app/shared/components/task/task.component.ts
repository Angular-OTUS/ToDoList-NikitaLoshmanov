import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../model/task";
import {ToastService} from "../../services/toast/toast.service";
import {Router} from "@angular/router";
import {AddEditDialogComponent} from "../dialog/add-edit-dialog/add-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EditMode} from "../../model/editMode";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() readonly = false;
  @Input() selectedId: number | null = null;
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() updateItemEvent = new EventEmitter<Task>();

  checked: boolean | undefined;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  goToTaskDetails(item: Task) {
    this.router.navigate(['tasks/backlog', item.id] );
  }

  openDialog(task: Task): void {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      width: '500px',
      data: {
        id: task.id,
        text: task.text,
        description: task.description,
        status: task.status,
        editMode: EditMode.UPDATE,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateItemEvent.emit(result.task);
      }
    })
  }

  deleteItem(id?: number) {
    this.deleteItemEvent.emit(id);
    this.showInfoToast('INFO', 'Task was deleted')
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

}
