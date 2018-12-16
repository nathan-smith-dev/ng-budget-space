import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';

@NgModule({
  declarations: [ClickStopPropagationDirective],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule, ClickStopPropagationDirective]
})
export class SharedModule {}
