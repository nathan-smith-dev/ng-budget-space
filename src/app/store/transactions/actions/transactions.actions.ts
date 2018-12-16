import { Action } from '@ngrx/store';

import { Transaction } from '../../../shared/models/transaction.model';
import { Category } from '../../../shared/models/category.model';
import { CategorizedTransaction } from '../../../shared/models/CategorizedTransaction.model';
import { IncomeAndExpenseTotal } from '../../../shared/models/IncomeAndExpenseTotal.model';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const FETCH_USER_CATEGORIES = 'FETCH_USER_CATEGORIES';
export const SET_USER_CATEGORIES = 'SET_USER_CATEGORIES';
export const SET_MONTH_YEAR = 'SET_MONTH_YEAR';
export const FETCH_CATEGORIZED_EXPENSES = 'FETCH_CATEGORIZED_EXPENSES';
export const SET_CATEGORIZED_EXPENSES = 'SET_CATEGORIZED_EXPENSES';
export const SET_ANNUAL_CATEGORIZED_EXPENSES =
  'SET_ANNUAL_CATEGORIZED_EXPENSES';
export const FETCH_INCOME_AND_EXPENSE_TOALS = 'FETCH_INCOME_AND_EXPENSE_TOALS';
export const SET_INCOME_AND_EXPENSE_TOALS = 'SET_INCOME_AND_EXPENSE_TOALS';
export const SET_ANNUAL_INCOME_AND_EXPENSE_TOALS =
  'SET_ANNUAL_INCOME_AND_EXPENSE_TOALS';

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

export class SetMonthYear implements Action {
  readonly type = SET_MONTH_YEAR;

  constructor(public payload: { month: number; year: number }) {}
}

export class FetchCategorizedExpenses implements Action {
  readonly type = FETCH_CATEGORIZED_EXPENSES;
}

export class SetCategorizedExpenses implements Action {
  readonly type = SET_CATEGORIZED_EXPENSES;

  constructor(public payload: CategorizedTransaction[]) {}
}

export class SetAnnualCategorizedExpenses implements Action {
  readonly type = SET_ANNUAL_CATEGORIZED_EXPENSES;

  constructor(public payload: CategorizedTransaction[]) {}
}

export class FetchIncomeAndExpenseTotals implements Action {
  readonly type = FETCH_INCOME_AND_EXPENSE_TOALS;
}

export class SetIncomeAndExpenseTotals implements Action {
  readonly type = SET_INCOME_AND_EXPENSE_TOALS;

  constructor(public payload: IncomeAndExpenseTotal) {}
}

export class SetAnnualIncomeAndExpenseTotals implements Action {
  readonly type = SET_ANNUAL_INCOME_AND_EXPENSE_TOALS;

  constructor(public payload: IncomeAndExpenseTotal) {}
}

export type TransactionActions =
  | FetchTransactions
  | SetTransactions
  | FetchUserCategories
  | SetUserCategories
  | SetMonthYear
  | FetchCategorizedExpenses
  | SetCategorizedExpenses
  | FetchIncomeAndExpenseTotals
  | SetAnnualCategorizedExpenses
  | SetIncomeAndExpenseTotals
  | SetAnnualIncomeAndExpenseTotals;
