import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Observable } from 'rxjs';
import { getTransactionId } from 'src/app/store/router/selectors';
import { getTransactions } from 'src/app/store/transactions';
import { switchMap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail-view',
  templateUrl: './transaction-detail-view.component.html',
  styleUrls: ['./transaction-detail-view.component.scss']
})
export class TransactionDetailViewComponent implements OnInit {
  transaction$: Observable<Transaction>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  handleToggleDetailModal() {
    this.router.navigate(['/transactions']);
  }

  handleEdit() {
    this.router.navigate(['./edit'], { relativeTo: this.activatedRoute });
  }
}
