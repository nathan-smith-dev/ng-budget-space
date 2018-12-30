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

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.transactions$ = this.store.select(fromTransactions.getTransactions);
  }

  handleItemClicked(transaction: Transaction) {
    this.router.navigate(['transactions', transaction.id]);
  }

  handleToggleNew() {
    this.router.navigate(['transactions', 'new']);
  }
}
