import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";
import {ToDoListItemViewComponent} from "./components/to-do-list-item-view/to-do-list-item-view.component";

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {
    path: 'tasks',
    component: ToDoListComponent,
    children: [
      {
        path: ':id',
        component: ToDoListItemViewComponent,
      },
    ],
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
