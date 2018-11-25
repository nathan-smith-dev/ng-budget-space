import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HeaderService } from '../header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-items',
  templateUrl: './header-items.component.html',
  styleUrls: ['./header-items.component.scss']
})
export class HeaderItemsComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  mobileSubscription: Subscription;
  open: boolean;
  openSubscription: Subscription;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.mobileSubscription = this.headerService.isMobile$
      .subscribe((mobile: boolean) => {
        this.isMobile = mobile;
      })
    this.openSubscription = this.headerService.isOpen$
      .subscribe((open: boolean) => {
        this.open = open;
      });
    this.headerService.setIsMobile(window.innerWidth);
    this.headerService.setIsOpen(false);
  }

  ngOnDestroy() {
    this.mobileSubscription.unsubscribe();
    this.openSubscription.unsubscribe();
  }

  handleToggleMenu() {
    this.headerService.setIsOpen(!this.open);
  }
}
