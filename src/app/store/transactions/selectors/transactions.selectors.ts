import { createSelector } from '@ngrx/store';
import * as fromTransactions from '../reducers';
import { TransactionEntity } from 'src/app/shared/models/entities';

export const getTransactions = createSelector(
  fromTransactions.getTransactionState,
  transactionState => transactionState.transactions.transactions
);

export const getTransactionById = createSelector(
  getTransactions,
  (transactions: TransactionEntity, { id }) => transactions[id]
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

export const getTransactionsLoaded = createSelector(
  fromTransactions.getTransactionState,
  transactionsState => transactionsState.transactions.loaded
);

export const getTransactionsLoading = createSelector(
  fromTransactions.getTransactionState,
  transactionsState => transactionsState.transactions.loading
);
