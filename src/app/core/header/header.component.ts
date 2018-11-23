import { Component, OnInit } from '@angular/core';
import { 
  faChartPie, 
  faDollarSign, 
  faChartBar, 
  faChartLine, 
  faUser
} from '@fortawesome/free-solid-svg-icons';

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
  faCoffee = faChartPie;
  faDollarSign = faDollarSign;
  faChartBar = faChartBar;
  faChartLine = faChartLine;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

  onResize(event) {
    this.isMobile = event.target.innerWidth <= 625;
  }

}
