import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTransaction from '../../../store/transactions';
import { Observable, Subscription, ReplaySubject } from 'rxjs';
import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { PIE_CHART_COLORS } from '../../components/pie-chart/pie-chart.component';
import { CategorizedTransaction } from 'src/app/shared/models/CategorizedTransaction.model';
import { getCategorizedExpenses, getTotals } from '../../../store/transactions';
import { takeUntil, withLatestFrom } from 'rxjs/operators';
import { IncomeAndExpenseTotal } from 'src/app/shared/models/IncomeAndExpenseTotal.model';

@Component({
  selector: 'app-month-report',
  templateUrl: './month-report.component.html',
  styleUrls: ['./month-report.component.scss']
})
export class MonthReportComponent implements OnInit, OnDestroy {
  transactionsState: Observable<any>;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  transactionsStateSubscription: Subscription;
  pieData: number[];
  pieLabels: string[];
  pieTotals: number = 0;
  barData: number[];
  barLabels: string[];
  colors: string[] = PIE_CHART_COLORS;
  faChartPie = faChartPie;
  faChartBar = faChartBar;
  activeChart: string = 'pie';
  categorizedExpenses$: Observable<CategorizedTransaction[]>;
  totals$: Observable<IncomeAndExpenseTotal>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.categorizedExpenses$ = this.store.select(getCategorizedExpenses);

    this.transactionsState = this.store.select(
      fromTransaction.getTransactionState
    );
    this.totals$ = this.store.select(getTotals);

    this.categorizedExpenses$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(categorizedExpenses => {
        if (!categorizedExpenses) {
          this.pieData = [];
          this.pieLabels = [];
          this.barData = [];
          this.barLabels = [];
        } else {
          const sorted = categorizedExpenses.sort((a, b) => b.total - a.total);
          this.pieData = sorted.map(t => t.total);
          this.pieTotals = this.pieData.reduce((a, b) => a + b, 0);
          this.pieLabels = sorted.map(t => t.name);
        }
      });

    this.totals$.pipe(takeUntil(this.destroyed$)).subscribe(totals => {
      if (!totals) {
        this.barData = [];
        this.barLabels = [];
      } else {
        this.barData = [totals.incomes, totals.expenses];
        this.barLabels = ['Incomes', 'Expenses'];
      }
    });
  }

  toggleChart(chart: string) {
    this.activeChart = chart;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
