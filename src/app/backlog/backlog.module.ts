import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BacklogRoutingModule} from './backlog-routing.module';
import {BacklogComponent} from './components/backlog/backlog.component';
import {SharedModule} from "../shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    BacklogComponent,
  ],
    imports: [
        CommonModule,
        BacklogRoutingModule,
        SharedModule,
        MatButtonToggleModule,
        MatTooltipModule,
    ],
})
export class BacklogModule { }
