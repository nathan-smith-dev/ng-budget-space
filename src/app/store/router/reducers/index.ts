import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

export * from './router-store.reducers';

export const getRouterState = createFeatureSelector<RouterReducerState>(
  'routerReducer'
);
