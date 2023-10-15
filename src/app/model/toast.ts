export class Toast {
  public visible: boolean;
  public title: string;
  public message: string;

  constructor(title: string, message: string, visible: boolean) {
    this.visible = visible;
    this.title = title;
    this.message = message;
  }
}
