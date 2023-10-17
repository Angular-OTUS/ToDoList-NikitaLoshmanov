import {Status} from "./status";

export class ToDoListItem {
  constructor(
    public id: number,
    public text: string,
    public description: string,
    public status: Status) {}

}
