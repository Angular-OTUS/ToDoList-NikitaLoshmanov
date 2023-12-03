import {Component, OnInit} from '@angular/core';
import {Toast} from "../../model/toast";
import {ToastService} from "../../services/toast/toast.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toast$: Observable<Toast | undefined> | undefined;

  public close(toast: Toast) {
    this.toastService.hide(toast);
  }

  constructor(
    private toastService: ToastService,
  ) {}

  getToast() {
    return this.toastService.getToast()
  }

  ngOnInit(): void {
    this.toast$ = this.toastService.getToast();
  }

}
