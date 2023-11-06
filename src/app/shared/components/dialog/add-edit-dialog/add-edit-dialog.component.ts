import {Component} from '@angular/core';
import {StatusMap} from "../../../model/status";
import {AddEditDialogController} from "./add-edit-dialog.controller";

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.scss'],
  providers: [
    AddEditDialogController,
  ],
})
export class AddEditDialogComponent {

  statusValues = Object.values(StatusMap);

  constructor(
    public view: AddEditDialogController,
  ) {}



}
