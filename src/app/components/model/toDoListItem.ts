export class ToDoListItem {
  id: number;
  text: string;
  description: string;

  constructor(id: number, text: string, description: string) {
    this.id = id;
    this.text = text;
    this.description = description;
  }
}
