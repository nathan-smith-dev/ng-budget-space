import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
    auth: fromAuth.State,
    router: RouterReducerState
};

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    router: routerReducer
}