import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromTransactions from '../store/transactions.reducers';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import * as TransactionActions from '../store/transactions.actions';

const today = new Date();

@Component({
  selector: 'app-month-year-selector',
  templateUrl: './month-year-selector.component.html',
  styleUrls: ['./month-year-selector.component.scss']
})
export class MonthYearSelectorComponent implements OnInit, OnDestroy {
  years: number[] = [
    today.getFullYear() - 1,
    today.getFullYear()
  ];
  transactionState: Observable<fromTransactions.State>;
  transactionStateSubscription: Subscription;
  monthYearForm: FormGroup;
  monthYear: { month: number, year: number };

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.transactionState = this.store.select('transactions');
    this.transactionStateSubscription = this.transactionState
      .subscribe((state: fromTransactions.State) => {
        this.monthYear = state.monthYear;
        this.initForm();
      });
    this.initForm();
  }

  ngOnDestroy() {
    this.transactionStateSubscription.unsubscribe();
  }

  initForm() {
    this.monthYearForm = new FormGroup({
      year: new FormControl(this.monthYear.year),
      month: new FormControl(this.monthYear.month)
    });
  }

  handleChangeYear(event: any) {
    this.monthYear.year = +event.target.value;
    this.store.dispatch(new TransactionActions.SetMonthYear({ month: this.monthYear.month, year: this.monthYear.year }));
    this.store.dispatch(new TransactionActions.FetchTransactions);
  }
  
  handleChangeMonth(event: any) {
    this.monthYear.month = +event.target.value;
    this.store.dispatch(new TransactionActions.SetMonthYear({ month: this.monthYear.month, year: this.monthYear.year }));
    this.store.dispatch(new TransactionActions.FetchTransactions);
    this.store.dispatch(new TransactionActions.FetchCategorizedExpenses);
    this.store.dispatch(new TransactionActions.FetchIncomeAndExpenseTotals);
  }

}