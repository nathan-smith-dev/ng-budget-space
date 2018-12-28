import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from './store/auth';
import { Observable } from 'rxjs';
import { User } from './shared/models/auth.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserDataService } from './shared/services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  openToast: boolean = false;
  isAuthLoading$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private afAuth: AngularFireAuth,
    private userDataService: UserDataService
  ) {}

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
      this.userDataService.updateUserData();
    } else {
      this.store.dispatch(new fromAuth.SetUser(null));
      this.store.dispatch(new fromAuth.SetToken(null));
    }
  }
}
