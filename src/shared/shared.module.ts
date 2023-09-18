import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {CustomTooltipDirective} from './directive/custom-tooltip.directive';
import {CustomTooltipComponent} from './components/tooltip/custom-tooltip.component';


@NgModule({
  declarations: [
      ButtonComponent,
      CustomTooltipDirective,
      CustomTooltipComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
      CommonModule,
      ButtonComponent,
      CustomTooltipComponent,
      CustomTooltipDirective,
  ],
})
export class SharedModule { }
