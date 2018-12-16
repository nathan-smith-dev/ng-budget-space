import { createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers';

export const getIsAuthenticated = createSelector(
  fromAuth.getAuthState,
  state => state.currentUser.isAuthenticated
);

export const getLoading = createSelector(
  fromAuth.getAuthState,
  state => state.currentUser.loading
);

export const getLoaded = createSelector(
  fromAuth.getAuthState,
  state => state.currentUser.loaded
);
