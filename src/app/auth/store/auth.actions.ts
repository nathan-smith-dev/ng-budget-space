import { Action } from '@ngrx/store';
import { User } from '../auth.model';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    
    constructor(public payload: string) {}
}

export class SetUser implements Action {
    readonly type = SET_USER;

    constructor(public payload: User) {}
}

export type AuthActions = SetToken | SetUser;