import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromTransactions from './transactions.reducers';

export interface TransactionState {
  transactions: fromTransactions.State;
}

export const reducers: ActionReducerMap<TransactionState> = {
  transactions: fromTransactions.reducer
};

export const getTransactionState = createFeatureSelector<TransactionState>(
  'Transactions'
);
