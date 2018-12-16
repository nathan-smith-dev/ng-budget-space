import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as authActions from '../../auth/actions';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions) {}

  @Effect({ dispatch: false })
  login$ = this.actions.ofType(authActions.LOGIN_USER).pipe(
    map((loginAction: authActions.LoginUser) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    })
  );
}
