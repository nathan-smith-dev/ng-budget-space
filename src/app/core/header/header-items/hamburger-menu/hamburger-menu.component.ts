import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  @Input()
  open: boolean = false;

  @Output()
  onMenuToggled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.onMenuToggled.emit();
  }

}
