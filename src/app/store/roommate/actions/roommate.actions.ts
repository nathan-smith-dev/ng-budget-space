import { Action } from '@ngrx/store';
import { Roommate } from 'src/app/shared/models/roommate.model';

export const FETCH_ROOMMATE_DATA = '[Roommate] Fetch rommate data';
export const SET_ROOMMATE_DATA = '[Roommate] Set rommate data';

export class FetchRoommateData implements Action {
  readonly type = FETCH_ROOMMATE_DATA;
}

export class SetRoommateData implements Action {
  readonly type = SET_ROOMMATE_DATA;

  constructor(public payload: Roommate[]) {}
}

export type RoommateActions = FetchRoommateData | SetRoommateData;
