import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {CustomTooltipDirective} from './directive/custom-tooltip.directive';
import {CustomTooltipComponent} from './components/tooltip/custom-tooltip.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HeaderComponent} from './components/header/header.component';
import {TaskComponent} from "./components/task/task.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TaskDetailsComponent} from "./components/task-details/task-details.component";
import {MatCardModule} from "@angular/material/card";
import {ToastComponent} from "./components/toast/toast.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AddEditDialogComponent} from "./components/dialog/add-edit-dialog/add-edit-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
      ButtonComponent,
      CustomTooltipDirective,
      CustomTooltipComponent,
      SpinnerComponent,
      HeaderComponent,
      TaskComponent,
      TaskDetailsComponent,
      ToastComponent,
      AddEditDialogComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    CustomTooltipComponent,
    CustomTooltipDirective,
    SpinnerComponent,
    HeaderComponent,
    TaskComponent,
    TaskDetailsComponent,
    ToastComponent,
    AddEditDialogComponent,
  ],
})
export class SharedModule { }
