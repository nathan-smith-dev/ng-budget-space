import * as fromAuth from './auth.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface AuthState {
  currentUser: fromAuth.State;
}

export const reducers: ActionReducerMap<AuthState> = {
  currentUser: fromAuth.reducer
};

export const getAuthState = createFeatureSelector<AuthState>('Auth');
