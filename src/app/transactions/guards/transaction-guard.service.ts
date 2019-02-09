import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, switchMap, catchError, tap } from 'rxjs/operators';

import * as fromToast from '../../store/toast';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { getTransactionState } from 'src/app/store/transactions';

@Injectable()
export class TransactionsGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate() {
    return this.store.select(getTransactionState).pipe(
      tap(loaded => console.log(loaded)),
      filter(transactionState => transactionState.transactions.loaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
