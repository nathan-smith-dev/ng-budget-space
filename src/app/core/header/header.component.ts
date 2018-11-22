import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onResize(event) {
    this.isMobile = event.target.innerWidth <= 625;
  }

}
