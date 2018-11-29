import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromTransaction from '../../transactions/store/transactions.reducers';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-month-report',
  templateUrl: './month-report.component.html',
  styleUrls: ['./month-report.component.scss']
})
export class MonthReportComponent implements OnInit, OnDestroy {
  transactionsState: Observable<fromTransaction.State>;
  transactionsStateSubscription: Subscription;
  pieData: number[];
  pieLabels: string[];

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.transactionsState = this.store.select('transactions');

    this.transactionsStateSubscription = this.transactionsState
      .subscribe((state: fromTransaction.State) => {
        if(!state.categorizedExpenses) {
          this.pieData = [];
          this.pieLabels = [];
        } else {
          const sorted = state.categorizedExpenses.sort((a, b) => b.total - a.total);
          this.pieData = sorted.map(t => t.total);
          this.pieLabels = sorted.map(t => t.category);
        }
      });
  }

  ngOnDestroy() {
    this.transactionsStateSubscription.unsubscribe();
  }

}
