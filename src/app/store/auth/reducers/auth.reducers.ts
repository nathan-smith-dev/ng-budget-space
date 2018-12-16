import { Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface State {
  user: object;
  authToken: string;
  isAuthenticated: boolean;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  user: null,
  authToken: null,
  isAuthenticated: false,
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN_USER:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case AuthActions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        loaded: !action.payload
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        authToken: action.payload,
        isAuthenticated: action.payload ? true : false,
        loading: false,
        loaded: true
      };
    case AuthActions.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
