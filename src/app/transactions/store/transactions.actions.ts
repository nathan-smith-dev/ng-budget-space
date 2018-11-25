import { Action } from '@ngrx/store';

import { Transaction } from '../transaction.model';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

export class FetchTransactions implements Action {
    readonly type = FETCH_TRANSACTIONS;
}

export class SetTransactions implements Action {
    readonly type = SET_TRANSACTIONS;

    constructor(public payload: Transaction[]) {}
}

export type TransactionActions = FetchTransactions |
    SetTransactions;