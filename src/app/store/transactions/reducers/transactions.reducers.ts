import * as TransactionActions from '../actions/transactions.actions';
import { Transaction } from '../../../shared/models/transaction.model';
import { Category } from '../../../shared/models/category.model';
import { CategorizedTransaction } from '../../../shared/models/CategorizedTransaction.model';
import { IncomeAndExpenseTotal } from '../../../shared/models/IncomeAndExpenseTotal.model';

const today = new Date();

export interface State {
  transactions: Transaction[];
  userCategories: Category[];
  monthYear: { month: number; year: number };
  categorizedExpenses: CategorizedTransaction[];
  annualCategorizedExpenses: CategorizedTransaction[];
  totals: IncomeAndExpenseTotal;
  annualTotals: IncomeAndExpenseTotal;
}

const initialState: State = {
  transactions: [],
  userCategories: [],
  monthYear: { month: today.getMonth(), year: today.getFullYear() },
  categorizedExpenses: [],
  annualCategorizedExpenses: [],
  totals: new IncomeAndExpenseTotal(0, 0),
  annualTotals: new IncomeAndExpenseTotal(0, 0)
};

export function reducer(
  state = initialState,
  action: TransactionActions.TransactionActions
) {
  switch (action.type) {
    case TransactionActions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    case TransactionActions.SET_USER_CATEGORIES:
      return {
        ...state,
        userCategories: action.payload
      };
    case TransactionActions.SET_MONTH_YEAR:
      return {
        ...state,
        monthYear: action.payload
      };
    case TransactionActions.SET_CATEGORIZED_EXPENSES:
      return {
        ...state,
        categorizedExpenses: action.payload
      };
    case TransactionActions.SET_ANNUAL_CATEGORIZED_EXPENSES:
      return {
        ...state,
        annualCategorizedExpenses: action.payload
      };
    case TransactionActions.SET_INCOME_AND_EXPENSE_TOALS:
      return {
        ...state,
        totals: action.payload
      };
    case TransactionActions.SET_ANNUAL_INCOME_AND_EXPENSE_TOALS:
      return {
        ...state,
        annualTotals: action.payload
      };
    default:
      return state;
  }
}