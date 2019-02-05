import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { State, reducer } from './roommate.reducers';

export interface RoommateState {
  roommates: State;
}

export const reducers: ActionReducerMap<RoommateState> = {
  roommates: reducer
};

export const getTransactionState = createFeatureSelector<RoommateState>(
  'Roommates'
);
