import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  title = 'TasksBoard';
  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500)
  }

}
