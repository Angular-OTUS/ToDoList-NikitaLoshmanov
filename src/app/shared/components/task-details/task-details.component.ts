import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Task} from "../../model/task";
import {TasksBoardDataService} from "../../services/tasksBoardData/tasks-board-data.service";
import {Observable, switchMap, tap} from "rxjs";
import {PathParamSharedService} from "../../services/pathParam/path-param-shared.service";

@Component({
  selector: 'app-to-do-list-item-view',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit{
  private id: number | null = null;
  item$: Observable<Task> | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TasksBoardDataService,
    private pathParamService: PathParamSharedService,
  ) {}

  ngOnInit(): void {
    this.item$ = this.route.params
      .pipe(tap(p => this.id = +p['id']))
      .pipe<Task>(
      switchMap(p => {
        this.pathParamService.onRequestIdParam.emit(+p['id']);
        return this.service.getItemById(p['id']);
      }),
    )
  }

}
