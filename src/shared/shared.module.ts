import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {CustomTooltipDirective} from './directive/custom-tooltip.directive';
import {CustomTooltipComponent} from './components/tooltip/custom-tooltip.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
      ButtonComponent,
      CustomTooltipDirective,
      CustomTooltipComponent,
      SpinnerComponent,
  ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
    ],
  exports: [
    CommonModule,
    ButtonComponent,
    CustomTooltipComponent,
    CustomTooltipDirective,
    SpinnerComponent,
  ],
})
export class SharedModule { }
