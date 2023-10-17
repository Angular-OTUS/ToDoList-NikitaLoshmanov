import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToDoListItem} from "../../model/to-do-list-item";
import {ToDoListDataService} from "../../services/toDoListData/to-do-list-data.service";
import {Observable, switchMap, tap} from "rxjs";
import {PathParamSharedService} from "../../services/shared/pathParam/path-param-shared.service";

@Component({
  selector: 'app-to-do-list-item-view',
  templateUrl: './to-do-list-item-details.component.html',
  styleUrls: ['./to-do-list-item-details.component.scss'],
})
export class ToDoListItemDetailsComponent implements OnInit{
  private id: number | null = null;
  item$: Observable<ToDoListItem> | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ToDoListDataService,
    private pathParamService: PathParamSharedService,
  ) {}

  ngOnInit(): void {
    this.item$ = this.route.params
      .pipe(tap(p => this.id = +p['id']))
      .pipe<ToDoListItem>(
      switchMap(p => {
        this.pathParamService.onRequestIdParam.emit(+p['id']);
        return this.service.getItemById(p['id']);
      }),
    )
  }

  close() {
    this.router.navigate(['..', {id: this.id}], {
      relativeTo: this.route,
    })
    this.pathParamService.onRequestIdParam.emit(null);
  }

}
