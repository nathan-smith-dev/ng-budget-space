import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromTransactions from '../store/transactions.reducers';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactionsState: Observable<fromTransactions.State>;
  transaction: Transaction = new Transaction(null, null, null, null, null, null, null);
  detailModalOpen: boolean = false;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.transactionsState = this.store.select('transactions');
  }

  handleItemClicked(transaction: Transaction) {
    this.transaction = transaction;
    this.handleToggleDetailModal();
  }

  handleToggleDetailModal() {
    this.detailModalOpen = !this.detailModalOpen;
  }

  handleEdit() {
    console.log('Edit', this.transaction);
  }

  handleDelete() {
    console.log('Delete', this.transaction);
  }

}
