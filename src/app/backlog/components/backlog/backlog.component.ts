import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../../../shared/model/task";
import {ToastService} from "../../../shared/services/toast/toast.service";
import {PathParamSharedService} from "../../../shared/services/pathParam/path-param-shared.service";
import {AddEditDialogComponent} from "../../../shared/components/dialog/add-edit-dialog/add-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Status} from "../../../shared/model/status";
import {EditMode} from "../../../shared/model/editMode";
import {Router} from "@angular/router";
import {TaskStoreService} from "../../../shared/services/store/task-store.service";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent implements OnInit{
  headerText = 'Backlog'
  tasks$: Observable<Task[]>;
  selectedId: number | null = null;

  constructor(
    private toastService: ToastService,
    private pathParamService: PathParamSharedService,
    private dialog: MatDialog,
    private router: Router,
    private taskStoreService: TaskStoreService,
  ) {
    this.tasks$ = this.taskStoreService.tasks$;
  }

  ngOnInit(): void {
    this.pathParamService.onRequestIdParam
      .subscribe(id => this.selectedId = id);
  }

  addTask(task: Task) {
    this.taskStoreService.addTask(task);
    this.showInfoToast('INFO', 'New task was added')
  }

  deleteTask(id: number) {
    this.taskStoreService.deleteTask(id);
  }

  updateTask(task: Task) {
    this.taskStoreService.updateTask(task);
    this.showInfoToast('INFO', 'Task was updated');
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['tasks', 'backlog', task.id]);
    });
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      width: '500px',
      data: {
        id: this.taskStoreService.getNextId(),
        text: '',
        description: '',
        status: Status.TODO,
        editMode: EditMode.INSERT,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.addTask(data.task);
      }
    })
  }

}
