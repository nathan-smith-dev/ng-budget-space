import { Action } from '@ngrx/store';

import { Transaction } from '../transaction.model';
import { Category } from '../category.model';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const FETCH_USER_CATEGORIES = 'FETCH_USER_CATEGORIES';
export const SET_USER_CATEGORIES = 'SET_USER_CATEGORIES';

export class FetchTransactions implements Action {
    readonly type = FETCH_TRANSACTIONS;
}

export class SetTransactions implements Action {
    readonly type = SET_TRANSACTIONS;

    constructor(public payload: Transaction[]) {}
}

export class FetchUserCategories implements Action {
    readonly type = FETCH_USER_CATEGORIES;
}

export class SetUserCategories implements Action {
    readonly type = SET_USER_CATEGORIES;

    constructor(public payload: Category[]) {}
}

export type TransactionActions = FetchTransactions |
    SetTransactions |
    FetchUserCategories | 
    SetUserCategories;