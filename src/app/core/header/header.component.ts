import { Component, OnInit } from '@angular/core';
import { 
  faDollarSign, 
  faChartBar, 
  faChartLine, 
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import 'firebase/auth';


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
  faDollarSign = faDollarSign;
  faChartBar = faChartBar;
  faChartLine = faChartLine;
  faUser = faUser;

  constructor(private router: Router) { }

  ngOnInit() {}

  onResize(event) {
    this.isMobile = event.target.innerWidth <= 625;
  }

  async handleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

}
