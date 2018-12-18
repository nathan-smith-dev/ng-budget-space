import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  routerReducer: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: routerReducer
};
