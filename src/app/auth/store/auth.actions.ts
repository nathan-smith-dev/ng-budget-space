import { Action } from '@ngrx/store';

export const SET_TOKEN = 'SET_TOKEN';

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    
    constructor(public payload: string) {}
}

export type AuthActions = SetToken;