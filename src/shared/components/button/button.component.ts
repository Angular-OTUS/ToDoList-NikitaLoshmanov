import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title: string | undefined;
  @Input() isDisabled = false;
  @Input() styles: string[] = [];
  @Input() type = "button";
}
