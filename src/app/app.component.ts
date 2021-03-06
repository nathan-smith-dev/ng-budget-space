import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from './store/auth';
import { Observable } from 'rxjs';
import { User } from './shared/models/auth.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { FetchUserData, getMonthYear } from './store/transactions';
import { FetchRoommateData } from './store/roommate';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  openToast: boolean = false;
  isAuthLoading$: Observable<boolean>;

  constructor(private store: Store<any>, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.isAuthLoading$ = this.store.select(fromAuth.getLoading);
    this.store.dispatch(new fromAuth.SetLoading(true));

    this.afAuth.user.subscribe((user: any) => {
      this.initializeUser(user);
    });
  }

  initializeUser(user: any) {
    if (user) {
      const loggedInUser = new User(
        user.uid,
        user.displayName.split(' ')[0],
        user.email
      );
      this.store.dispatch(new fromAuth.SetUser(loggedInUser));
      this.store.dispatch(new fromAuth.SetToken(user.qa));
      this.store.dispatch(new FetchRoommateData());
      this.store
        .select(getMonthYear)
        .pipe(first())
        .subscribe(monthYear => {
          this.store.dispatch(new FetchUserData(monthYear));
        });
    } else {
      this.store.dispatch(new fromAuth.SetUser(null));
      this.store.dispatch(new fromAuth.SetToken(null));
    }
  }
}
