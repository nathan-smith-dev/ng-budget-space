import * as TransactionActions from './transactions.actions';
import { Transaction } from '../transaction.model';
import { Category } from '../category.model';

export interface State {
    transactions: Transaction[];
    userCategories: Category[];
}

const initialState: State = {
    transactions: [],
    userCategories: []
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
        default: 
            return state;
    }
}