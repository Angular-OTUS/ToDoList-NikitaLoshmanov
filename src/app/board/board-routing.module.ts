import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BoardComponent} from "./components/board/board.component";

const boardRoutes: Routes = [
  {
    path: '',
    component: BoardComponent,
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(boardRoutes)],
  exports: [RouterModule],
})
export class BoardRoutingModule { }
