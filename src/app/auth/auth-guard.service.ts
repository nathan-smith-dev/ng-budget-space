import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, switchMap, catchError, zip } from 'rxjs/operators';

import * as fromApp from '../store/app.reducers';
import * as fromToast from '../store/toast';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { getAuthState } from '../store/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromApp.AppState>) {}

  canActivate() {
    return this.store.select(getAuthState).pipe(
      filter(authState => authState.currentUser.loaded),
      first(),
      switchMap(authState => {
        if (authState.currentUser.isAuthenticated) {
          return of(true);
        } else {
          this.store.dispatch(new fromToast.OpenToast('Login to view page'));
          return of(false);
        }
      }),
      catchError(() => of(false))
    );
  }
}
