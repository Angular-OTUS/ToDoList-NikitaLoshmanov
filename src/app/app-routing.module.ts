import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TaskBoardComponent} from "./components/task-board/task-board.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskBoardComponent,
    children: [
      {
        path: 'backlog',
        loadChildren: () => import('./backlog/backlog.module').then(m => m.BacklogModule),
      },
      {
        path: 'board',
        loadChildren: () => import('./board/board.module').then(m => m.BoardModule),
      },
    ],
  },
  {path: '', redirectTo: '/tasks/backlog', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
