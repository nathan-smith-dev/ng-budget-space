import { createSelector } from '@ngrx/store';
import { getRoommateState } from '../reducers';
import { Roommate } from 'src/app/shared/models/roommate.model';

export const getRoommates = createSelector(
  getRoommateState,
  roommateState => roommateState.roommates.roommates
);

export const getRoommatesAsUsers = createSelector(
  getRoommates,
  roommates => roommates.map(u => u.user)
);
