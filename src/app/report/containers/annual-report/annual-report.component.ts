import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducers';
import * as fromTransaction from '../../../store/transactions';
import { Observable, Subscription } from 'rxjs';
import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { PIE_CHART_COLORS } from '../../components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.scss']
})
export class AnnualReportComponent implements OnInit {
  transactionsState: Observable<any>;
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

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.transactionsState = this.store.select(
      fromTransaction.getTransactionState
    );

    this.transactionsStateSubscription = this.transactionsState.subscribe(
      state => {
        if (!state.annualCategorizedExpenses) {
          this.pieData = [];
          this.pieLabels = [];
          this.barData = [];
          this.barLabels = [];
        } else {
          const sorted = state.annualCategorizedExpenses.sort(
            (a, b) => b.total - a.total
          );
          this.pieData = sorted.map(t => t.total);
          this.pieTotals = this.pieData.reduce((a, b) => a + b, 0);
          this.pieLabels = sorted.map(t => t.category);

          this.barData = [
            state.annualTotals.incomes,
            state.annualTotals.expenses
          ];
          this.barLabels = ['Incomes', 'Expenses'];
        }
      }
    );
  }

  toggleChart(chart: string) {
    this.activeChart = chart;
  }

  ngOnDestroy() {
    this.transactionsStateSubscription.unsubscribe();
  }
}
