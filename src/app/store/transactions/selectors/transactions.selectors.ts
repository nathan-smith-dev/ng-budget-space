import { createSelector } from '@ngrx/store';
import * as fromTransactions from '../reducers';

export const getTransactions = createSelector(
  fromTransactions.getTransactionState,
  transactionState => transactionState.transactions.transactions
);

export const getMonthYear = createSelector(
  fromTransactions.getTransactionState,
  transactionState => transactionState.transactions.monthYear
);

export const getCategorizedExpenses = createSelector(
  fromTransactions.getTransactionState,
  transactionState => transactionState.transactions.categorizedExpenses
);

export const getAnnualCategorizedExpenses = createSelector(
  fromTransactions.getTransactionState,
  transactionState => transactionState.transactions.annualCategorizedExpenses
);

export const getTotals = createSelector(
  fromTransactions.getTransactionState,
  transactionState => transactionState.transactions.totals
);

export const getAnnualTotals = createSelector(
  fromTransactions.getTransactionState,
  transactionState => transactionState.transactions.annualTotals
);
