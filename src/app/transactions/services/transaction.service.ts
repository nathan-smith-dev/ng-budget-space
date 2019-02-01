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

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store<any>
  ) {}

  deleteTransaction(transaction: Transaction) {
    const postFix = transaction.type === 'Expense' ? 'expenses' : 'incomes';
    const id = transaction.id;

    this.httpClient
      .delete(`${environment.apiBaseUrl}/${postFix}/${id}`)
      .pipe(withLatestFrom(this.store.select(getMonthYear)))
      .subscribe(([placeholder, monthYear]) => {
        this.router.navigate(['transactions']);
        this.store.dispatch(new FetchUserData(monthYear));
      });
  }

  postTransaction(transaction: Transaction) {
    const postFix = transaction.type === 'Expense' ? 'expenses' : 'incomes';

    if (postFix === 'expenses') {
      const { amount, date, desc, category } = transaction;
      const expense = new Expense(amount, new Date(date), desc, category.id);

      this.httpClient
        .post(`${environment.apiBaseUrl}/${postFix}`, expense)
        .pipe(withLatestFrom(this.store.select(getMonthYear)))
        .subscribe(([placeholder, monthYear]) => {
          this.router.navigate(['transactions']);
          console.log(placeholder, monthYear);
          this.store.dispatch(new FetchUserData(monthYear));
        });
    } else if (postFix === 'incomes') {
      const { amount, date, desc, category } = transaction;
      const income = new Income(amount, new Date(date), desc, category.id);

      this.httpClient
        .post(`${environment.apiBaseUrl}/${postFix}`, income)
        .pipe(withLatestFrom(this.store.select(getMonthYear)))
        .subscribe(([placeholder, monthYear]) => {
          this.router.navigate(['transactions']);
          this.store.dispatch(new FetchUserData(monthYear));
        });
    }
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
