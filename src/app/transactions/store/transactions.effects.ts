import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';

import * as TransactionActions from './transactions.actions';
import { switchMap, map, withLatestFrom, mergeMap } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Transaction } from "../transaction.model";
import { Category } from "../category.model";
import { environment } from '../../../environments/environment';
import { Store } from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import { CategorizedTransaction } from "../CategorizedTransaction.model";
import { IncomeAndExpenseTotal } from "../IncomeAndExpenseTotal.model";

@Injectable()
export class TransactionEffects {
    constructor(
        private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<fromApp.AppState>
    ) {}

    @Effect()
    transactionFetch = this.actions$
        .ofType(TransactionActions.FETCH_TRANSACTIONS)
        .pipe(
            withLatestFrom(this.store),
            switchMap(([action, storeState]) => {
                return this.httpClient.get<Transaction[]>(`${environment.apiBaseUrl}/transactions`, 
                    {
                        params: new HttpParams()
                            .set('month', (storeState.transactions.monthYear.month + 1).toString())
                            .set('year', storeState.transactions.monthYear.year.toString())
                    })
            }),
            map(
                (transactions: Transaction[]) => {
                    return {
                        type: TransactionActions.SET_TRANSACTIONS,
                        payload: transactions
                    }
                }
            )
        );
    
    @Effect()
    userCategoriesFetch = this.actions$
        .ofType(TransactionActions.FETCH_USER_CATEGORIES)
        .pipe(
            switchMap((action: TransactionActions.FetchUserCategories) => {
                return this.httpClient.get<Category[]>(`${environment.apiBaseUrl}/categories`)
            }),
            map(
                (categories: Category[]) => {
                    return {
                        type: TransactionActions.SET_USER_CATEGORIES,
                        payload: categories
                    }
                }
            )
        );
    
        @Effect()
        categoryTotalsFetch = this.actions$
            .ofType(TransactionActions.FETCH_CATEGORIZED_EXPENSES)
            .pipe(
                withLatestFrom(this.store),
                switchMap(([action, storeState]) => {
                    return this.httpClient.get<CategorizedTransaction[]>(`${environment.apiBaseUrl}/categories/totals`, 
                        {
                            params: new HttpParams()
                                .set('month', (storeState.transactions.monthYear.month + 1).toString())
                                .set('year', storeState.transactions.monthYear.year.toString())
                        })
                }),
                withLatestFrom(this.store),
                mergeMap(
                    ([categorizedTransactions, storeState]) => {
                        return this.httpClient.get<CategorizedTransaction[]>(`${environment.apiBaseUrl}/categories/totals`, {
                            params: new HttpParams()
                                .set('annual', storeState.transactions.monthYear.year.toString())
                        }).pipe(
                            map((annualCategorizedTransactions: CategorizedTransaction[]) => {
                                return [
                                    {
                                        type: TransactionActions.SET_CATEGORIZED_EXPENSES,
                                        payload: categorizedTransactions
                                    },
                                    {
                                        type: TransactionActions.SET_ANNUAL_CATEGORIZED_EXPENSES,
                                        payload: annualCategorizedTransactions
                                    }
                                ]
                        }))
                    }
                ),
                mergeMap(array => { return array; })
            );
        
        @Effect()
        incomesAndExpensesFetch = this.actions$
            .ofType(TransactionActions.FETCH_INCOME_AND_EXPENSE_TOALS)
            .pipe(
                withLatestFrom(this.store),
                switchMap(([action, storeState]) => {
                    return this.httpClient.get<IncomeAndExpenseTotal[]>(`${environment.apiBaseUrl}/expenses/totals`, 
                        {
                            params: new HttpParams()
                                .set('month', (storeState.transactions.monthYear.month + 1).toString())
                                .set('year', storeState.transactions.monthYear.year.toString())
                        })
                }),
                withLatestFrom(this.store),
                mergeMap(
                    ([totals, storeState]) => {
                        return this.httpClient.get<IncomeAndExpenseTotal[]>(`${environment.apiBaseUrl}/expenses/totals`, 
                        {
                            params: new HttpParams()
                                .set('annual', storeState.transactions.monthYear.year.toString())
                        }).pipe(
                            map(
                                (annualIncomeExpenses: IncomeAndExpenseTotal[]) => {
                                    return [
                                        {
                                            type: TransactionActions.SET_ANNUAL_INCOME_AND_EXPENSE_TOALS,
                                            payload: annualIncomeExpenses[0]
                                        },
                                        {
                                            type: TransactionActions.SET_INCOME_AND_EXPENSE_TOALS,
                                            payload: totals[0]
                                        }
                                    ]
                                }
                            )
                        )
                    }
                ), mergeMap((array) => {
                    return array;
                })
            );
}