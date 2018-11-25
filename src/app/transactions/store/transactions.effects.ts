import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';

import * as TransactionActions from './transactions.actions';
import { switchMap, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../transaction.model";

const url = 'https://budget-space.com/api';

@Injectable()
export class TransactionEffects {
    constructor(
        private actions$: Actions,
        private httpClient: HttpClient
    ) {}

    @Effect()
    transactionFetch = this.actions$
        .ofType(TransactionActions.FETCH_TRANSACTIONS)
        .pipe(
            switchMap((action: TransactionActions.FetchTransactions) => {
                return this.httpClient.get<Transaction[]>(`${url}/transactions`)
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
}