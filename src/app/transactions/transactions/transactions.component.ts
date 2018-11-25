import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromTransactions from '../store/transactions.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactionsState: Observable<fromTransactions.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.transactionsState = this.store.select('transactions');
  }

}
