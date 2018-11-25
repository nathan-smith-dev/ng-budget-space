import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import * as AuthActions from './auth/store/auth.actions';
import { AuthGuard } from './auth/auth-guard.service';
import { Subscription } from 'rxjs';
import { User } from './auth/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-budget-space';
  toastSubscription: Subscription;
  openToast: boolean = false;

  constructor(
    private store: Store<AppState>,
    private authGuardService: AuthGuard
  ) {}

  ngOnInit() {
    this.toastSubscription = this.authGuardService.cannotNavigate
      .subscribe(() => {
        this.openToast = true;
        setTimeout(() => {
          this.openToast = false;
        }, 3000);
      });

    firebase.initializeApp({
      apiKey: environment.firebase.apiKey, 
      authDomain: environment.firebase.authDomain
    });

    firebase.auth().onAuthStateChanged((user: any) => {
      if(user) {
        const loggedInUser = new User(user.uid, user.displayName.split(' ')[0], user.email);
        this.store.dispatch(new AuthActions.SetUser(loggedInUser));
        this.store.dispatch(new AuthActions.SetToken(user.qa));
      } else {
        this.store.dispatch(new AuthActions.SetUser(null));
        this.store.dispatch(new AuthActions.SetToken(null));
      }
    })
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }
}
