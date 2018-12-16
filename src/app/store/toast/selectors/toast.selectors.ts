import * as fromToast from '../reducers';
import { createSelector } from '@ngrx/store';

export const getToastMessage = createSelector(
  fromToast.getToastState,
  toastState => toastState.toast.message
);

export const getToastOpen = createSelector(
  fromToast.getToastState,
  toastState => toastState.toast.open
);
