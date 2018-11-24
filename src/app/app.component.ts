import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-budget-space';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: environment.firebase.apiKey, 
      authDomain: environment.firebase.authDomain
    });

    firebase.auth().onAuthStateChanged((user: any) => {
      if(user) {
        console.log(user);
        this.store.dispatch(new AuthActions.SetToken(user.qa));
      } else {
        this.store.dispatch(new AuthActions.SetToken(null));
      }
    })
  }
}
