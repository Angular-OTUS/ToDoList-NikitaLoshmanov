import {Injectable} from '@angular/core';
import {Toast} from "../../model/toast";

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts: Toast[] = [];
  show(title: string, message: string, duration = 5000) {
    const toast = new Toast(true);
    toast.title = title;
    toast.message = message
    this.toasts.push(toast);
    setTimeout(() => {
      this.remove(toast);
    }, duration);
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  getToasts() {
    return this.toasts;
  }

}
