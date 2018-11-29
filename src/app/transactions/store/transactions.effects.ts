import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';

import * as TransactionActions from './transactions.actions';
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Transaction } from "../transaction.model";
import { Category } from "../category.model";
import { environment } from '../../../environments/environment';
import { Store } from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import { CategorizedTransaction } from "../CategorizedTransaction.model";

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
                map(
                    (categorizedTransactions: CategorizedTransaction[]) => {
                        return {
                            type: TransactionActions.SET_CATEGORIZED_EXPENSES,
                            payload: categorizedTransactions
                        }
                    }
                )
            );
}