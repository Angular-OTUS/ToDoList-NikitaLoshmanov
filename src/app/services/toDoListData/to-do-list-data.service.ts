import {Injectable} from '@angular/core';
import {ToDoListItem} from "../../model/toDoListItem";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ToDoListDataService {
  private itemsUrl = 'http://localhost:3000/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient) {}

  getItems(): Observable<ToDoListItem[]> {
    return this.http.get<ToDoListItem[]>(this.itemsUrl);
  }

  addItem(item: ToDoListItem): Observable<ToDoListItem> {
    return this.http.post<ToDoListItem>(this.itemsUrl, item, this.httpOptions);
  }

  deleteItem(id: number): Observable<ToDoListItem> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete<ToDoListItem>(url, this.httpOptions);
  }

  getItemById(id: number): Observable<ToDoListItem> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<ToDoListItem>(url, this.httpOptions);
  }

  updateItem(item: ToDoListItem): Observable<ToDoListItem> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put<ToDoListItem>(url, item, this.httpOptions);
  }

}
