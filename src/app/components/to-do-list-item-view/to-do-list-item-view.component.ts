import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToDoListItem} from "../../model/toDoListItem";
import {ToDoListDataService} from "../../services/toDoListData/to-do-list-data.service";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-to-do-list-item-view',
  templateUrl: './to-do-list-item-view.component.html',
  styleUrls: ['./to-do-list-item-view.component.scss'],
})
export class ToDoListItemViewComponent implements OnInit{
  item$: Observable<ToDoListItem> | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ToDoListDataService,
  ) {}

  ngOnInit(): void {
    this.item$ = this.route.params.pipe<ToDoListItem>(
      switchMap(p => this.service.getItemById(p['id'])),
    )
  }

  close() {
    this.router.navigate(['..'], {relativeTo: this.route})
  }

}
