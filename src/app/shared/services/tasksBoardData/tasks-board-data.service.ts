import {Injectable} from '@angular/core';
import {Task} from "../../model/task";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TasksBoardDataService {
  private itemsUrl = 'http://localhost:3000/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.itemsUrl);
  }

  addTask(item: Task): Observable<Task> {
    return this.http.post<Task>(this.itemsUrl, item, this.httpOptions);
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  getTaskById(id: number): Observable<Task> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Task>(url, this.httpOptions);
  }

  updateTask(item: Task): Observable<Task> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put<Task>(url, item, this.httpOptions);
  }

  getNextId(): number {
    let nextId = 0;
    this.getTasks()
        .pipe(
            tap(items => {
              const lastItem = items.find(item => item.id === Math.max(...items.map(item => item.id)));
              if (lastItem) {
                nextId = lastItem.id + 1;
              }
            }))
    return nextId;
  }

}
