import { createSelector } from '@ngrx/store';
import { getRouterState } from '../reducers';

export const getTransactionId = createSelector(
  getRouterState,
  router => {
    let found;
    router.state.url.split('/').forEach(param => {
      if (param.split('-').length === 5) {
        found = param;
      }
    });
    return found as string;
  }
);
