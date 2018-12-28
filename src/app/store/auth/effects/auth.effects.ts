import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as authActions from '../../auth/actions';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions, private afAuth: AngularFireAuth) {}

  @Effect({ dispatch: false })
  login$ = this.actions.ofType(authActions.LOGIN_USER).pipe(
    map((loginAction: authActions.LoginUser) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithRedirect(provider);
    })
  );
}
