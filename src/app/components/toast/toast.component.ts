import {Component, DoCheck} from '@angular/core';
import {Toast} from "../../model/toast";
import {ToastService} from "../../services/toast/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements DoCheck {
  toasts: Toast[] = [];

  public close(toast: Toast) {
    this.toastService.remove(toast);
  }

  constructor(
    private toastService: ToastService,
  ) {}

  ngDoCheck(): void {
    this.toasts = this.toastService.getToasts()
  }

}
