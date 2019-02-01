import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import * as TransactionActions from '../../../store/transactions/actions';
import { getMonthYear } from '../../../store/transactions';
import { ReplaySubject } from 'rxjs';
import { takeUntil, first } from 'rxjs/operators';

const today = new Date();

@Component({
  selector: 'app-month-year-selector',
  templateUrl: './month-year-selector.component.html',
  styleUrls: ['./month-year-selector.component.scss']
})
export class MonthYearSelectorComponent implements OnInit, OnDestroy {
  years: number[] = [today.getFullYear() - 1, today.getFullYear()];
  monthYearForm: FormGroup;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store
      .select(getMonthYear)
      .pipe(takeUntil(this.destroy$))
      .subscribe(monthYear => {
        this.monthYearForm = new FormGroup({
          year: new FormControl(monthYear.year),
          month: new FormControl(monthYear.month)
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  handleChangeYear(event: any) {
    this.store.dispatch(new TransactionActions.SetYear(+event.target.value));
    this.store
      .select(getMonthYear)
      .pipe(first())
      .subscribe(monthYear => {
        this.store.dispatch(new TransactionActions.FetchUserData(monthYear));
      });
  }

  handleChangeMonth(event: any) {
    this.store.dispatch(
      new TransactionActions.SetMonth(+event.target.value + 1)
    );
    this.store
      .select(getMonthYear)
      .pipe(first())
      .subscribe(monthYear => {
        this.store.dispatch(new TransactionActions.FetchUserData(monthYear));
      });
  }
}
