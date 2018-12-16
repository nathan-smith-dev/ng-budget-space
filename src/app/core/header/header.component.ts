import { Component, OnInit } from '@angular/core';
import {
  faDollarSign,
  faChartBar,
  faChartLine,
  faUser,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Observable } from 'rxjs';

import * as fromAuth from '../../store/auth';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = true;
  faDollarSign = faDollarSign;
  faChartBar = faChartBar;
  faChartLine = faChartLine;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  isAuthenticated$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(fromAuth.getIsAuthenticated);
  }

  onResize(event) {
    this.headerService.setIsMobile(event.target.innerWidth);
  }

  async handleLogin() {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithRedirect(provider);
    this.store.dispatch(new fromAuth.LoginUser());
  }

  async handleLogout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
  }
}
