import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromTransactions from '../../store/transactions';
import { UserDataService } from 'src/app/shared/services/user-data.service';
import { Router } from '@angular/router';
import { Expense } from 'src/app/shared/models/expense.model';
import { Income } from 'src/app/shared/models/income.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(
    private httpClient: HttpClient,
    private userDataService: UserDataService,
    private router: Router
  ) {}

  deleteTransaction(transaction: Transaction) {
    const postFix = transaction.type === 'Expense' ? 'expenses' : 'incomes';
    const id = transaction.id;

    this.httpClient
      .delete(`${environment.apiBaseUrl}/${postFix}/${id}`)
      .subscribe(() => {
        this.router.navigate(['transactions']);
        this.userDataService.updateUserData();
      });
  }

  postTransaction(transaction: Transaction) {
    const postFix = transaction.type === 'Expense' ? 'expenses' : 'incomes';

    if (postFix === 'expenses') {
      const { amount, date, desc, categoryid } = transaction;
      const expense = new Expense(amount, new Date(date), desc, categoryid);

      this.httpClient
        .post(`${environment.apiBaseUrl}/${postFix}`, expense)
        .subscribe(() => {
          this.router.navigate(['transactions']);
          this.userDataService.updateUserData();
        });
    } else if (postFix === 'incomes') {
      const { amount, date, desc, categoryid } = transaction;
      const income = new Income(amount, new Date(date), desc, categoryid);

      this.httpClient
        .post(`${environment.apiBaseUrl}/${postFix}`, income)
        .subscribe(() => {
          this.router.navigate(['transactions']);
          this.userDataService.updateUserData();
        });
    }
  }

  putTransaction(transaction: Transaction) {
    const postFix = transaction.type === 'Expense' ? 'expenses' : 'incomes';
    const id = transaction.id;

    if (postFix === 'expenses') {
      const { amount, date, desc, categoryid } = transaction;
      const expense = new Expense(amount, new Date(date), desc, categoryid);

      this.httpClient
        .put(`${environment.apiBaseUrl}/${postFix}/${id}`, expense)
        .subscribe(() => {
          this.router.navigate(['transactions']);
          this.userDataService.updateUserData();
        });
    } else if (postFix === 'incomes') {
      const { amount, date, desc, categoryid } = transaction;
      const income = new Income(amount, new Date(date), desc, categoryid);

      this.httpClient
        .put(`${environment.apiBaseUrl}/${postFix}/${id}`, income)
        .subscribe(() => {
          this.router.navigate(['transactions']);
          this.userDataService.updateUserData();
        });
    }
  }
}
