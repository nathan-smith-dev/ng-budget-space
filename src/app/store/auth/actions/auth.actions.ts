import { Action } from '@ngrx/store';
import { User } from '../../../shared/models/auth.model';

export const LOGIN_USER = '[Auth] Login User';
export const SET_LOADING = '[Authh] Set Loading';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';

export class LoginUser {
  readonly type = LOGIN_USER;
}

export class SetLoading implements Action {
  readonly type = SET_LOADING;

  constructor(public payload: boolean) {}
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export class SetUser implements Action {
  readonly type = SET_USER;

  constructor(public payload: User) {}
}

export type AuthActions = SetToken | SetUser | LoginUser | SetLoading;
