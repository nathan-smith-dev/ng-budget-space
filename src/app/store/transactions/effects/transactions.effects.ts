import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as TransactionActions from '../actions';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { TransactionEffectService } from 'src/app/store/transactions/effects/transaction.effect.service';
import { forkJoin, of, from } from 'rxjs';
import {
  UserDataFail,
  UserDataSuccess,
  FetchTransactions,
  FetchUserData,
  SetTransactions,
  SetUserCategories,
  SetCategorizedExpenses,
  SetIncomeAndExpenseTotals
} from '../actions';
import { OpenToast } from '../../toast';
import { IncomeAndExpenseTotal } from 'src/app/shared/models/IncomeAndExpenseTotal.model';

@Injectable()
export class TransactionEffects {
  constructor(
    private actions$: Actions,
    private transactionService: TransactionEffectService
  ) {}

  @Effect()
  transactionFetch = this.actions$
    .ofType(TransactionActions.FETCH_TRANSACTIONS)
    .pipe(switchMap(() => this.transactionService.getTransactions()));

  @Effect()
  userCategoriesFetch = this.actions$
    .ofType(TransactionActions.FETCH_USER_CATEGORIES)
    .pipe(switchMap(() => this.transactionService.getUserCategories()));

  @Effect()
  categoryTotalsFetch = this.actions$
    .ofType(TransactionActions.FETCH_CATEGORIZED_EXPENSES)
    .pipe(
      switchMap(() => this.transactionService.getAllCategoryTotals()),
      mergeMap(categoryTotals => categoryTotals)
    );

  @Effect()
  incomesAndExpensesFetch = this.actions$
    .ofType(TransactionActions.FETCH_INCOME_AND_EXPENSE_TOALS)
    .pipe(
      switchMap(() => this.transactionService.getAllIncomeAndExpenseTotals()),
      mergeMap(incomesAndExpenses => incomesAndExpenses)
    );

  @Effect()
  updateUserData = this.actions$
    .ofType(TransactionActions.FETCH_USER_DATA)
    .pipe(
      switchMap((action: FetchUserData) => {
        const { month, year } = action.payload;
        return this.transactionService.getTransactionData(month, year);
      }),
      mergeMap(transactionData => {
        console.log(transactionData);
        return transactionData;
      }),
      catchError(error =>
        from([
          new UserDataFail(),
          new OpenToast(
            'ERROR: Unable to load user transaction data. Please try again'
          )
        ])
      )
    );
  // @Effect()
  // updateUserData = this.actions$
  //   .ofType(TransactionActions.FETCH_USER_DATA)
  //   .pipe(
  //     switchMap(() => {
  //       return forkJoin(
  //         this.transactionService.getTransactions(),
  //         this.transactionService.getUserCategories(),
  //         this.transactionService.getAllCategoryTotals(),
  //         this.transactionService.getAllIncomeAndExpenseTotals()
  //       );
  //     }),
  //     mergeMap((dispatches: any) => {
  //       return [...dispatches.flat(), new UserDataSuccess()];
  //     }),
  //     catchError(error =>
  //       from([
  //         new UserDataFail(),
  //         new OpenToast(
  //           'ERROR: Unable to load user transaction data. Please try again'
  //         )
  //       ])
  //     )
  //   );
}
