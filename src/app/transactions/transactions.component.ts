import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTransactions from '../store/transactions';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Expense } from '../shared/models/expense.model';
import { Income } from '../shared/models/income.model';
import * as TransactionActions from '../store/transactions/actions';
import { Router } from '@angular/router';
import { routerFadeAnimation } from '../shared/animations/app.animations';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  animations: [routerFadeAnimation]
})
export class TransactionsComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  transaction: Transaction = new Transaction(
    null,
    null,
    null,
    null,
    new Date(),
    '',
    'Expense'
  );
  detailModalOpen: boolean = false;
  editModalOpen: boolean = false;
  newModalOpen: boolean = false;

  constructor(
    private store: Store<any>,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.transactions$ = this.store.select(fromTransactions.getTransactions);
  }

  handleItemClicked(transaction: Transaction) {
    // this.transaction = transaction;
    // this.handleToggleDetailModal();
    this.router.navigate(['transactions', transaction.id]);
  }

  handleToggleDetailModal() {
    this.detailModalOpen = !this.detailModalOpen;
  }

  handleToggleEdit() {
    this.editModalOpen = !this.editModalOpen;
  }

  handleToggleNew() {
    // this.newModalOpen = !this.newModalOpen;
    this.router.navigate(['transactions', 'new']);
  }

  handleEdit() {
    this.handleToggleEdit();
  }

  handleDelete() {
    const postFix =
      this.transaction.type === 'Expense' ? 'expenses' : 'incomes';
    const id = this.transaction.id;

    this.httpClient
      .delete(`${environment.apiBaseUrl}/${postFix}/${id}`)
      .subscribe(() => {
        this.handleToggleDetailModal();
        this.store.dispatch(new TransactionActions.FetchTransactions());
      });
  }

  handleSubmitForm(submittedValue: {
    transaction: Transaction;
    edit: boolean;
  }) {
    console.log(submittedValue);
    if (submittedValue.edit) {
      this.putTransaction(submittedValue);
    } else if (!submittedValue.edit) {
      this.postTransaction(submittedValue);
    }
  }

  putTransaction(submittedValue: { transaction: Transaction; edit: boolean }) {
    const postFix =
      submittedValue.transaction.type === 'Expense' ? 'expenses' : 'incomes';
    const id = submittedValue.transaction.id;

    if (postFix === 'expenses') {
      const { amount, date, desc, categoryid } = submittedValue.transaction;
      const expense = new Expense(amount, new Date(date), desc, categoryid);

      this.httpClient
        .put(`${environment.apiBaseUrl}/${postFix}/${id}`, expense)
        .subscribe(() => {
          this.handleToggleEdit();
          this.handleToggleDetailModal();
          this.store.dispatch(new TransactionActions.FetchTransactions());
        });
    } else if (postFix === 'incomes') {
      const { amount, date, desc, categoryid } = submittedValue.transaction;
      const income = new Income(amount, new Date(date), desc, categoryid);

      this.httpClient
        .put(`${environment.apiBaseUrl}/${postFix}/${id}`, income)
        .subscribe(() => {
          this.handleToggleEdit();
          this.handleToggleDetailModal();
          this.store.dispatch(new TransactionActions.FetchTransactions());
        });
    }
  }

  postTransaction(submittedValue: { transaction: Transaction; edit: boolean }) {
    const postFix =
      submittedValue.transaction.type === 'Expense' ? 'expenses' : 'incomes';

    if (postFix === 'expenses') {
      const { amount, date, desc, categoryid } = submittedValue.transaction;
      const expense = new Expense(amount, new Date(date), desc, categoryid);

      this.httpClient
        .post(`${environment.apiBaseUrl}/${postFix}`, expense)
        .subscribe(() => {
          this.handleToggleNew();
          this.store.dispatch(new TransactionActions.FetchTransactions());
        });
    } else if (postFix === 'incomes') {
      const { amount, date, desc, categoryid } = submittedValue.transaction;
      const income = new Income(amount, new Date(date), desc, categoryid);

      this.httpClient
        .post(`${environment.apiBaseUrl}/${postFix}`, income)
        .subscribe(() => {
          this.handleToggleNew();
          this.store.dispatch(new TransactionActions.FetchTransactions());
        });
    }
  }
}
