import {Component} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss'],
})
export class CustomTooltipComponent {
  tooltipMessage = '';
  left = 0;
  top = 0;
}
