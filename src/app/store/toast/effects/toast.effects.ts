import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as toastActions from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { timer } from 'rxjs';

@Injectable()
export class ToastEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  openToast$ = this.actions$.ofType(toastActions.OPEN_TOAST).pipe(
    switchMap(openAction => {
      return timer(3000);
    }),
    map(time => {
      return new toastActions.CloseToast();
    })
  );
}
