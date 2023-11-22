import {Inject, Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TasksApiService} from "../../../services/api/tasks-api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddEditDialogComponent} from "./add-edit-dialog.component";
import {tap} from "rxjs";
import {Task} from "../../../model/task";
import {EditMode} from "../../../model/editMode";

export interface TaskFormData {
  id: number;
  text: string;
  description: string;
  status: string;
  editMode: EditMode;
}

@Injectable()
export class AddEditDialogController {
  form: FormGroup;
  dialogTask!: Task;

  constructor(
    private tasksBoardDataService: TasksApiService,
    public dialogRef: MatDialogRef<AddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskFormData,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      text: [data.text, Validators.required],
      description: [data.description],
      status: [data.status, Validators.required],
    });
  }

  onSaveClick(): any {
    const {value} = this.form;
    if (this.data.editMode === EditMode.UPDATE) {
      this.tasksBoardDataService.getTaskById(this.data.id).pipe(
        tap(task => {
          task.text = value.text;
          task.description = value.description;
          task.status = value.status;
          this.dialogRef.close({task: task})
        }),
      )
      .subscribe();
    } else {
      this.dialogTask = new Task(this.data.id, value.text, value.description, value.status);
      this.dialogRef.close({task: this.dialogTask})
    }
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

}
