import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardRoutingModule} from './board-routing.module';
import {BoardComponent} from './components/board/board.component';
import {SharedModule} from "../shared/shared.module";
import {CdkDrag, CdkDragHandle, CdkDropList} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
})
export class BoardModule { }
