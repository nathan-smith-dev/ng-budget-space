 import { Action } from '@ngrx/store';
 import * as AuthActions from './auth.actions';

export interface State {
    user: object;
    authToken: string;
    isAuthenticated: boolean;
}

const initialState: State = {
    user: null, 
    authToken: null,
    isAuthenticated: false
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch(action.type) {
        case AuthActions.SET_TOKEN: 
            return {
                ...state, 
                authToken: action.payload,
                isAuthenticated: action.payload ? true : false
            }
        case AuthActions.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default: 
            return state;
    }
}