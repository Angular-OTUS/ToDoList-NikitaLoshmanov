import {Status} from "./status";

export class ToDoListItem {
  id: number;
  text: string;
  description: string;
  status: Status;

  // koshelnikov: use public word; remove assertion and class variables
  constructor(id: number, text: string, description: string, status: Status) {
    this.id = id;
    this.text = text;
    this.description = description;
    this.status = status;
  }
}
