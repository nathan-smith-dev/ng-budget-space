import * as TransactionActions from './transactions.actions';
import { Transaction } from '../transaction.model';
import { Category } from '../category.model';
import { CategorizedTransaction } from '../CategorizedTransaction.model';

const today = new Date();

export interface State {
    transactions: Transaction[];
    userCategories: Category[];
    monthYear: { month: number, year: number };
    categorizedExpenses: CategorizedTransaction[];
}

const initialState: State = {
    transactions: [],
    userCategories: [],
    monthYear: { month: today.getMonth(), year: today.getFullYear() },
    categorizedExpenses: []
}

export function transactionReducer(state = initialState, action: TransactionActions.TransactionActions) {
    switch(action.type) {
        case TransactionActions.SET_TRANSACTIONS: 
            return {
                ...state, 
                transactions: action.payload
            }
        case TransactionActions.SET_USER_CATEGORIES:
            return {
                ...state, 
                userCategories: action.payload
            }
        case TransactionActions.SET_MONTH_YEAR:
            return {
                ...state, 
                monthYear: action.payload
            }
        case TransactionActions.SET_CATEGORIZED_EXPENSES:
            return {
                ...state, 
                categorizedExpenses: action.payload
            }
        default: 
            return state;
    }
}