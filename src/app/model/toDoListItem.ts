import {Status} from "./status";

export class ToDoListItem {
  id: number;
  text: string;
  description: string;
  status: Status;

  constructor(id: number, text: string, description: string, status: Status) {
    this.id = id;
    this.text = text;
    this.description = description;
    this.status = status;
  }
}
