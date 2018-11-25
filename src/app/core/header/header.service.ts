import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const mobileWidth = 685;

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  isMobile$ = new Subject<boolean>();
  isOpen$ = new Subject<boolean>();

  constructor() { }

  setIsMobile(num: number) {
    if(num <= mobileWidth) {
      this.isMobile$.next(true);
    } else {
      this.isMobile$.next(false);
    }
  }

  setIsOpen(open: boolean) {
    this.isOpen$.next(open);
  }
}
