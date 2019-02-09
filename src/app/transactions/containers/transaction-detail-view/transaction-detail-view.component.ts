import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Observable } from 'rxjs';
import { getTransactionId } from 'src/app/store/router/selectors';
import {
  getTransactions,
  getTransactionById
} from 'src/app/store/transactions';
import { switchMap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { routerFadeAnimation } from 'src/app/shared/animations/app.animations';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-detail-view',
  templateUrl: './transaction-detail-view.component.html',
  styleUrls: ['./transaction-detail-view.component.scss'],
  animations: [routerFadeAnimation]
})
export class TransactionDetailViewComponent implements OnInit {
  transaction$: Observable<Transaction>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.transaction$ = this.store
      .select(getTransactionId)
      .pipe(switchMap(id => this.store.select(getTransactionById, { id })));
  }

  handleToggleDetailModal() {
    this.router.navigate(['/transactions']);
  }

  handleEdit() {
    this.router.navigate(['./edit'], { relativeTo: this.activatedRoute });
  }

  handleDelete(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction);
  }
}
