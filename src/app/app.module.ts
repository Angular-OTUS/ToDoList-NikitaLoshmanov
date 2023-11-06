import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "./shared/shared.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {FilterByItemStatusPipe} from './pipes/filter-items/filter-items.pipe';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {BoardModule} from "./board/board.module";
import {BacklogModule} from "./backlog/backlog.module";
import {TaskBoardComponent} from './components/task-board/task-board.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    declarations: [
        AppComponent,
        FilterByItemStatusPipe,
        TaskBoardComponent,
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
        BoardModule,
        BacklogModule,
        SharedModule,
        MatSidenavModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
