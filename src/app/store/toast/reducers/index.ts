import * as fromToast from './toast.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ToastState {
  toast: fromToast.State;
}

export const reducers: ActionReducerMap<ToastState> = {
  toast: fromToast.reducer
};

export const getToastState = createFeatureSelector<ToastState>('Toast');
