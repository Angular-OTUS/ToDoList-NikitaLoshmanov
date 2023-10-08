import {Component, OnInit} from '@angular/core';
import {Toast} from "../../model/toast";
import {ToastService} from "../../services/toast/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toast: Toast | undefined;

  public close(toast: Toast) {
    this.toastService.hide(toast);
  }

  constructor(
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.toastService.getToast().subscribe((toast) => {
      this.toast = toast;
    });
  }

}
