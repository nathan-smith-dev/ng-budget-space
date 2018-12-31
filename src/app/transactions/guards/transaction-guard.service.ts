import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, switchMap, catchError } from 'rxjs/operators';

import * as fromToast from '../../store/toast';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { getTransactionState } from 'src/app/store/transactions';

@Injectable()
export class TransactionsGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate() {
    return this.store.select(getTransactionState).pipe(
      filter(transactionState => !transactionState.transactions.loading),
      first(),
      switchMap(transactionState => {
        if (transactionState.transactions.loaded) {
          return of(true);
        } else {
          this.store.dispatch(
            new fromToast.OpenToast(
              'ERROR: Unable to load user transaction data. Please try again'
            )
          );
          return of(false);
        }
      }),
      catchError(() => of(false))
    );
  }
}
