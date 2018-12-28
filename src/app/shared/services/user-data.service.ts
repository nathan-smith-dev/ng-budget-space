import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTransactions from '../../store/transactions';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private store: Store<any>) {}

  updateUserData() {
    this.store.dispatch(new fromTransactions.FetchTransactions());
    this.store.dispatch(new fromTransactions.FetchUserCategories());
    this.store.dispatch(new fromTransactions.FetchCategorizedExpenses());
    this.store.dispatch(new fromTransactions.FetchIncomeAndExpenseTotals());
  }
}
