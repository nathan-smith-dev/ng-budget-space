import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-items',
  templateUrl: './header-items.component.html',
  styleUrls: ['./header-items.component.scss']
})
export class HeaderItemsComponent implements OnInit {
  @Input() isMobile: boolean;
  open: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 625;
  }

  handleToggleMenu() {
    this.open = !this.open;
  }
}
