import {Injectable} from '@angular/core';
import {Toast} from "../../model/toast";
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject$ = new BehaviorSubject<Toast | undefined>(undefined);

  show(title: string, message: string, duration = 5000) {
    const toast = new Toast(title, message, true);
    this.toastSubject$.next(toast);
    setTimeout(() => {
      this.hide(toast);
    }, duration);
  }

  hide(toast: Toast) {
    toast.visible = false;
  }

  getToast() {
    return this.toastSubject$.asObservable();
  }

}
