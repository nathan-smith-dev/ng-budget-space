import { Action } from '@ngrx/store';

export const OPEN_TOAST = '[Toast] Open Toast';
export const CLOSE_TOAST = '[Toast] Close Toast';

export class OpenToast implements Action {
  readonly type = OPEN_TOAST;

  constructor(public payload: string) {}
}

export class CloseToast implements Action {
  readonly type = CLOSE_TOAST;
}

export type ToastActions = OpenToast | CloseToast;
