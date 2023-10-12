import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToDoListItem} from "../../model/toDoListItem";
import {ToDoListDataService} from "../../services/toDoListData/to-do-list-data.service";
import {Observable, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-to-do-list-item-view',
  templateUrl: './to-do-list-item-view.component.html',
  styleUrls: ['./to-do-list-item-view.component.scss'],
})
export class ToDoListItemViewComponent implements OnInit{

  private id: number | null = null;
  item$: Observable<ToDoListItem> | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ToDoListDataService,
  ) {}

  ngOnInit(): void {
    this.item$ = this.route.params
      .pipe(tap(p => this.id = +p['id']))
      .pipe<ToDoListItem>(
      switchMap(p => this.service.getItemById(p['id'])),
    )
  }

  close() {
    this.router.navigate(['..', {id: this.id}], {
      relativeTo: this.route,
    })
  }

}
