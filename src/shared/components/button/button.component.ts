import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string | undefined;
  @Input() isDisabled: boolean = false;
  @Input() styles: string[] = [];
  @Input() type: string = "button";
}
