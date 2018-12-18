import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import * as fromAuth from './store/auth';
import * as TransactionActions from './store/transactions/actions';
import { Subscription, Observable } from 'rxjs';
import { User } from './shared/models/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-budget-space';
  toastSubscription: Subscription;
  openToast: boolean = false;
  isAuthLoading$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.isAuthLoading$ = this.store.select(fromAuth.getLoading);
    this.store.dispatch(new fromAuth.SetLoading(true));

    firebase.initializeApp({
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain
    });

    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        const loggedInUser = new User(
          user.uid,
          user.displayName.split(' ')[0],
          user.email
        );
        this.store.dispatch(new fromAuth.SetUser(loggedInUser));
        this.store.dispatch(new fromAuth.SetToken(user.qa));
        this.store.dispatch(new TransactionActions.FetchTransactions());
        this.store.dispatch(new TransactionActions.FetchUserCategories());
        this.store.dispatch(new TransactionActions.FetchCategorizedExpenses());
        this.store.dispatch(
          new TransactionActions.FetchIncomeAndExpenseTotals()
        );
      } else {
        this.store.dispatch(new fromAuth.SetUser(null));
        this.store.dispatch(new fromAuth.SetToken(null));
      }
    });
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }
}
