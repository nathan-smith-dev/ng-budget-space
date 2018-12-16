import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
// import * as fromAuth from './auth/reducers/auth.reducers';
// import * as fromTransaction from '../transactions/store/transactions.reducers';

export interface AppState {
  // auth: fromAuth.State,
  router: RouterReducerState;
  // transactions: fromTransaction.State;
}

export const reducers: ActionReducerMap<AppState> = {
  // auth: fromAuth.authReducer,
  router: routerReducer
  // transactions: fromTransaction.transactionReducer
};
