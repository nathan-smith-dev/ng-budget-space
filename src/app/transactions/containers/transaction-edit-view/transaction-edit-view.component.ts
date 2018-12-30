import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Observable } from 'rxjs';
import { getTransactionId } from 'src/app/store/router/selectors';
import { switchMap, map } from 'rxjs/operators';
import { getTransactions } from 'src/app/store/transactions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-edit-view',
  templateUrl: './transaction-edit-view.component.html',
  styleUrls: ['./transaction-edit-view.component.scss']
})
export class TransactionEditViewComponent implements OnInit {
  transaction$: Observable<Transaction>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.transaction$ = this.store.select(getTransactionId).pipe(
      switchMap(id => {
        return this.store.select(getTransactions).pipe(
          map(transactions => {
            return transactions.find(trans => trans.id === id);
          })
        );
      })
    );
  }

  handleToggleEdit() {
    this.router.navigate(['/transactions']);
  }

  handleSubmitForm(transaction: Transaction) {
    this.transactionService.putTransaction(transaction);
  }
}
