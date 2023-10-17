import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {ToDoListItemComponent} from './components/to-do-list-item/to-do-list-item.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../shared/shared.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ToastComponent} from './components/toast/toast.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {FilterByItemStatusPipe} from './pipes/filter-items/filter-items.pipe';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {TodoCreateItemComponent} from './components/todo-create-item/todo-create-item.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ToDoListItemDetailsComponent} from './components/to-do-list-item-view/to-do-list-item-details.component';
import {ToDoListItemEditComponent} from './components/to-to-list-item-edit/to-do-list-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    ToastComponent,
    FilterByItemStatusPipe,
    TodoCreateItemComponent,
    ToDoListItemDetailsComponent,
    ToDoListItemEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
