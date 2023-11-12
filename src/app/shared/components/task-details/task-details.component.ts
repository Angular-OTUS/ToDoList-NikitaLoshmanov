import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Task} from "../../model/task";
import {TasksBoardDataService} from "../../services/tasksBoardData/tasks-board-data.service";
import {Observable, switchMap} from "rxjs";
import {PathParamSharedService} from "../../services/pathParam/path-param-shared.service";

@Component({
  selector: 'app-to-do-list-item-view',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit{
  task$: Observable<Task> | null = null;
  constructor(
    private route: ActivatedRoute,
    private service: TasksBoardDataService,
    private pathParamService: PathParamSharedService,
  ) {}

  ngOnInit(): void {
    this.task$ = this.route.params
      .pipe<Task>(
      switchMap(p => {
        this.pathParamService.onRequestIdParam.emit(+p['id']);
        return this.service.getTaskById(p['id']);
      }),
    )
  }

}
