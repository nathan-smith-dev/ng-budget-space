import * as TransactionActions from './transactions.actions';
import { Transaction } from '../transaction.model';

export interface State {
    transactions: Transaction[];
}

const initialState: State = {
    transactions: []
}

export function transactionReducer(state = initialState, action: TransactionActions.TransactionActions) {
    switch(action.type) {
        case TransactionActions.SET_TRANSACTIONS: 
            return {
                ...state, 
                transactions: action.payload
            }
        default: 
            return state;
    }
}