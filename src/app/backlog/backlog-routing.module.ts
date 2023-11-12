import {NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from "@angular/router";
import {TaskDetailsComponent} from "../shared/components/task-details/task-details.component";
import {BacklogComponent} from "./components/backlog/backlog.component";


const backlogRoutes: Routes = [
  {
    path: '',
    component: BacklogComponent,
    children: [
      {
        path: ':id',
        component: TaskDetailsComponent,
      },
    ],
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(backlogRoutes)],
  exports: [RouterModule],
  providers: [
    provideRouter(backlogRoutes, withComponentInputBinding()),
  ],
})
export class BacklogRoutingModule { }
