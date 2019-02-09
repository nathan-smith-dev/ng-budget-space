import { createSelector } from '@ngrx/store';
import { getRoommateState } from '../reducers';
import { Roommate } from 'src/app/shared/models/roommate.model';
import { RoommateEntity } from 'src/app/shared/models/entities';

export const getRoommates = createSelector(
  getRoommateState,
  roommateState => roommateState.roommates.roommates
);

export const getRoommatesAsUsers = createSelector(
  getRoommates,
  roommates => Object.keys(roommates).map(k => roommates[k].user)
);

export const getRoommatesLoaded = createSelector(
  getRoommateState,
  roommateState => roommateState.roommates.loaded
);

export const getRoommatesLoading = createSelector(
  getRoommateState,
  roommateState => roommateState.roommates.loading
);

export const getRoommateById = createSelector(
  getRoommates,
  (roommates: RoommateEntity, { id }) => roommates[id]
);
