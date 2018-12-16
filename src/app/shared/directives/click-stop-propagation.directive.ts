import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickStopPropagation]'
})
export class ClickStopPropagationDirective {
  @HostListener('click', ['$event'])
  public onlClick(event: any) {
    event.stopPropagation();
  }

  constructor() { }

}
