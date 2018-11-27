import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromTransactions from '../store/transactions.reducers';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction.model';
import { ModalService } from 'src/app/core/modal/modal.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  providers: [ModalService]
})
export class TransactionsComponent implements OnInit {
  transactionsState: Observable<fromTransactions.State>;
  transaction: Transaction = new Transaction(null, null, null, null, null, null, null);

  constructor(
    private store: Store<fromApp.AppState>,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.transactionsState = this.store.select('transactions');
  }

  handleItemClicked(transaction: Transaction) {
    this.transaction = transaction;
    this.modalService.toggleModal();
  }

}
