import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Expense } from 'src/app/shared/models/expense.model';
import { Income } from 'src/app/shared/models/income.model';
import { FetchUserData, getMonthYear } from '../../store/transactions';
import { withLatestFrom } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import {
  createTransaction,
  deleteTransaction
} from '../../shared/graphql/queries';
import {
  TransactionInput,
  TransactionTypeEnum,
  TransactionInputPartial
} from '../../shared/graphql/query.types';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store<any>,
    private apollo: Apollo
  ) {}

  deleteTransaction(transaction: Transaction) {
    const transactionType =
      transaction.type === 'Expense'
        ? TransactionTypeEnum.EXPENSE
        : TransactionTypeEnum.INCOME;
    const id = transaction.id;
    const transactionQueryVar: TransactionInputPartial = {
      id,
      transactionType
    };

    this.apollo
      .mutate({
        mutation: deleteTransaction(),
        variables: {
          transaction: transactionQueryVar
        }
      })
      .pipe(withLatestFrom(this.store.select(getMonthYear)))
      .subscribe(([placeholder, monthYear]) => {
        this.router.navigate(['transactions']);
        this.store.dispatch(new FetchUserData(monthYear));
      });
  }

  postTransaction(transaction: Transaction) {
    const transactionType: TransactionTypeEnum =
      transaction.type === 'Expense'
        ? TransactionTypeEnum.EXPENSE
        : TransactionTypeEnum.INCOME;
    const { amount, date, desc, category } = transaction;
    const transactionInput: TransactionInput = {
      transactionType,
      amount: amount,
      date: new Date(date),
      categoryId: category.id
    };

    this.apollo
      .mutate({
        mutation: createTransaction(),
        variables: {
          transaction: transactionInput
        }
      })
      .pipe(withLatestFrom(this.store.select(getMonthYear)))
      .subscribe(([placeholder, monthYear]) => {
        this.router.navigate(['transactions']);
        this.store.dispatch(new FetchUserData(monthYear));
      });
  }

  putTransaction(transaction: Transaction) {
    const postFix = transaction.type === 'Expense' ? 'expenses' : 'incomes';
    const id = transaction.id;

    if (postFix === 'expenses') {
      const { amount, date, desc, category } = transaction;
      const expense = new Expense(amount, new Date(date), desc, category.id);

      this.httpClient
        .put(`${environment.apiBaseUrl}/${postFix}/${id}`, expense)
        .pipe(withLatestFrom(this.store.select(getMonthYear)))
        .subscribe(([placeholder, monthYear]) => {
          this.router.navigate(['transactions']);
          this.store.dispatch(new FetchUserData(monthYear));
        });
    } else if (postFix === 'incomes') {
      const { amount, date, desc, category } = transaction;
      const income = new Income(amount, new Date(date), desc, category.id);

      this.httpClient
        .put(`${environment.apiBaseUrl}/${postFix}/${id}`, income)
        .pipe(withLatestFrom(this.store.select(getMonthYear)))
        .subscribe(([placeholder, monthYear]) => {
          this.router.navigate(['transactions']);
          this.store.dispatch(new FetchUserData(monthYear));
        });
    }
  }
}
