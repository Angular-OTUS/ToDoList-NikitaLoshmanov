import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../../../shared/model/task";
import {TasksBoardDataService} from "../../../shared/services/tasksBoardData/tasks-board-data.service";
import {ToastService} from "../../../shared/services/toast/toast.service";
import {PathParamSharedService} from "../../../shared/services/pathParam/path-param-shared.service";
import {AddEditDialogComponent} from "../../../shared/components/dialog/add-edit-dialog/add-edit-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Status} from "../../../shared/model/status";
import {EditMode} from "../../../shared/model/editMode";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent implements OnInit{
  headerText = 'Backlog'
  tasks$: Observable<Task[]> | undefined;
  nextId: number | undefined;
  selectedId: number | null = null;

  constructor(
    private tasksBoardDataService: TasksBoardDataService,
    private toastService: ToastService,
    private pathParamService: PathParamSharedService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.getTasks();
    this.nextId = this.tasksBoardDataService.getNextId();
    this.pathParamService.onRequestIdParam
      .subscribe(id => this.selectedId = id);
  }

  addTask(task: Task) {
    this.tasksBoardDataService.addTask(task)
      .subscribe({
        error: (e) => console.log(e),
        complete: () => {
          this.tasks$ = this.getTasks();
          this.nextId = this.tasksBoardDataService.getNextId();
        },
      });
    this.showInfoToast('INFO', 'New task was added')
  }

  getTasks(): Observable<Task[]> {
    return this.tasksBoardDataService.getTasks();
  }

  deleteTask(id: number) {
    this.tasksBoardDataService.deleteTask(id)
      .subscribe({
        error: (e) => console.log(e),
        complete: () => this.tasks$ = this.getTasks(),
      });
  }

  updateTask(task: Task) {
    this.tasksBoardDataService.updateTask(task)
      .subscribe({
        error: (e) => console.log(e),
        complete: () => {
          this.tasks$ = this.getTasks()
          this.showInfoToast('INFO', 'Task was updated');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['tasks', 'backlog', task.id]);
          });
        },
      });
  }

  showInfoToast(title: string, message: string) {
    this.toastService.show(title, message);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditDialogComponent, {
      width: '500px',
      data: {
        id: this.getNextId(),
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

  getNextId(): number | undefined {
    return this.nextId;
  }

}
