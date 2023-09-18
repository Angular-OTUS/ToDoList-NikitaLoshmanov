export class Toast {
  public visible: boolean;
  public title: string | undefined;
  public message: string | undefined;
  public position: string;

  constructor(visible: boolean) {
    this.visible = visible;
    this.position = 'position-top-right';
  }

}
