import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {TooltipDirective} from './directive/tooltip.directive';
import {TooltipComponent} from './components/tooltip/tooltip.component';


@NgModule({
  declarations: [
      ButtonComponent,
      TooltipDirective,
      TooltipComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
      CommonModule,
      ButtonComponent,
      TooltipComponent,
      TooltipDirective,
  ],
})
export class SharedModule { }
