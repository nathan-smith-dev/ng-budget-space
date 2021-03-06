import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Transaction } from '../../../shared/models/transaction.model';
import { environment } from 'src/environments/environment';
import { switchMap, map, first, delay } from 'rxjs/operators';
import {
  SetTransactions,
  SetUserCategories,
  SetIncomeAndExpenseTotals,
  SetAnnualCategorizedExpenses,
  SetAnnualIncomeAndExpenseTotals,
  SetCategorizedExpenses,
  UserDataSuccess
} from '../actions';
import { getMonthYear } from '../selectors';
import { Category } from '../../../shared/models/category.model';
import { IncomeAndExpenseTotal } from '../../../shared/models/IncomeAndExpenseTotal.model';
import { forkJoin } from 'rxjs';
import { CategorizedTransaction } from '../../../shared/models/CategorizedTransaction.model';
import { Apollo } from 'apollo-angular';
import { getTransactionDataQuery } from '../../../shared/graphql/queries';
import { TransactionData } from 'src/app/shared/graphql/query.types';

@Injectable({
  providedIn: 'root'
})
export class TransactionEffectService {
  constructor(
    private httpClient: HttpClient,
    private store: Store<any>,
    private apollo: Apollo
  ) {}

  getTransactions() {
    return this.store.select(getMonthYear).pipe(
      switchMap(monthYear => {
        return this.httpClient.get<Transaction[]>(
          `${environment.apiBaseUrl}/transactions`,
          {
            params: new HttpParams()
              .set('month', (monthYear.month + 1).toString())
              .set('year', monthYear.year.toString())
          }
        );
      }),
      first(),
      map(transactions => {
        return new SetTransactions(transactions);
      })
    );
  }

  getTransactionData(month: number, year: number) {
    return this.apollo
      .query({
        query: getTransactionDataQuery(),
        variables: { month, year },
        fetchPolicy: 'network-only'
      })
      .pipe(
        first(),
        map(({ data }) => {
          const {
            transactions,
            categories,
            incomeTotals,
            expenseTotals
          } = data as TransactionData;
          return [
            new SetTransactions(transactions),
            new SetUserCategories(categories),
            new SetCategorizedExpenses(expenseTotals.categoryTotals),
            new SetIncomeAndExpenseTotals(
              new IncomeAndExpenseTotal(incomeTotals.total, expenseTotals.total)
            ),
            new UserDataSuccess()
          ];
        })
      );
  }

  getUserCategories() {
    return this.httpClient
      .get<Category[]>(`${environment.apiBaseUrl}/categories`)
      .pipe(
        map(categories => {
          return new SetUserCategories(categories);
        })
      );
  }

  getIncomeAndExpenseTotals() {
    return this.store.select(getMonthYear).pipe(
      switchMap(monthYear => {
        return this.httpClient.get<IncomeAndExpenseTotal[]>(
          `${environment.apiBaseUrl}/expenses/totals`,
          {
            params: new HttpParams()
              .set('month', (monthYear.month + 1).toString())
              .set('year', monthYear.year.toString())
          }
        );
      }),
      first(),
      map(incomesAndExpenses => {
        return new SetIncomeAndExpenseTotals(incomesAndExpenses[0]);
      })
    );
  }

  getAnnualIncomeAndExpenseTotals() {
    return this.store.select(getMonthYear).pipe(
      switchMap(monthYear => {
        return this.httpClient.get<IncomeAndExpenseTotal[]>(
          `${environment.apiBaseUrl}/expenses/totals`,
          {
            params: new HttpParams().set('annual', monthYear.year.toString())
          }
        );
      }),
      first(),
      map(incomesAndExpenses => {
        return new SetAnnualIncomeAndExpenseTotals(incomesAndExpenses[0]);
      })
    );
  }

  getAllIncomeAndExpenseTotals() {
    return forkJoin([
      this.getIncomeAndExpenseTotals(),
      this.getAnnualIncomeAndExpenseTotals()
    ]);
  }

  getCategoryTotals() {
    return this.store.select(getMonthYear).pipe(
      switchMap(monthYear => {
        return this.httpClient.get<CategorizedTransaction[]>(
          `${environment.apiBaseUrl}/categories/totals`,
          {
            params: new HttpParams()
              .set('month', (monthYear.month + 1).toString())
              .set('year', monthYear.year.toString())
          }
        );
      }),
      first(),
      map(
        categorizedTransactions =>
          new SetCategorizedExpenses(categorizedTransactions)
      )
    );
  }

  getAnnualCategoryTotals() {
    return this.store.select(getMonthYear).pipe(
      switchMap(monthYear => {
        return this.httpClient.get<CategorizedTransaction[]>(
          `${environment.apiBaseUrl}/categories/totals`,
          {
            params: new HttpParams().set('annual', monthYear.year.toString())
          }
        );
      }),
      first(),
      map(
        categorizedTransactions =>
          new SetAnnualCategorizedExpenses(categorizedTransactions)
      )
    );
  }

  getAllCategoryTotals() {
    return forkJoin([this.getCategoryTotals(), this.getAnnualCategoryTotals()]);
  }
}
