import * as TransactionActions from '../actions/transactions.actions';
import { Transaction } from '../../../shared/models/transaction.model';
import { Category } from '../../../shared/models/category.model';
import { CategorizedTransaction } from '../../../shared/models/CategorizedTransaction.model';
import { IncomeAndExpenseTotal } from '../../../shared/models/IncomeAndExpenseTotal.model';
import { TransactionEntity } from 'src/app/shared/models/entities';
import { mapArrayOfObjectsToEntity } from 'src/app/utilties';

const today = new Date();

export interface State {
  transactions: TransactionEntity;
  userCategories: Category[];
  monthYear: { month: number; year: number };
  categorizedExpenses: CategorizedTransaction[];
  annualCategorizedExpenses: CategorizedTransaction[];
  totals: IncomeAndExpenseTotal;
  annualTotals: IncomeAndExpenseTotal;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  transactions: {},
  userCategories: [],
  monthYear: { month: today.getMonth() + 1, year: today.getFullYear() },
  categorizedExpenses: [],
  annualCategorizedExpenses: [],
  totals: new IncomeAndExpenseTotal(0, 0),
  annualTotals: new IncomeAndExpenseTotal(0, 0),
  loading: true,
  loaded: false
};

export function reducer(
  state = initialState,
  action: TransactionActions.TransactionActions
) {
  switch (action.type) {
    case TransactionActions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: mapArrayOfObjectsToEntity(action.payload, t => t.id)
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
    case TransactionActions.SET_MONTH:
      return {
        ...state,
        monthYear: { ...state.monthYear, month: action.payload }
      };
    case TransactionActions.SET_YEAR:
      return {
        ...state,
        monthYear: { ...state.monthYear, year: action.payload }
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
    case TransactionActions.FETCH_USER_DATA:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case TransactionActions.USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case TransactionActions.USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}
