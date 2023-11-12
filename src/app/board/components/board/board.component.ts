import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../../../shared/model/task";
import {TasksBoardDataService} from "../../../shared/services/tasksBoardData/tasks-board-data.service";
import {Status} from "../../../shared/model/status";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  headerText = 'Board'
  tasks$: Observable<Task[]> | undefined;

  ngOnInit(): void {
    this.tasks$ = this.getTasks();
  }

  constructor(
    private tasksBoardDataService: TasksBoardDataService,
  ) {}

  getTasks(): Observable<Task[]> {
    return this.tasksBoardDataService.getTasks();
  }

  protected readonly Status = Status;
}
