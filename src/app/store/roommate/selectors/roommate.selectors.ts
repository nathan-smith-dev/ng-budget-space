import { createSelector } from '@ngrx/store';
import { getRoommateState } from '../reducers';
import { Roommate } from 'src/app/shared/models/roommate.model';
import { RoommateEntity } from 'src/app/shared/models/entities';
import { Totaller } from 'src/app/shared/models/totaller.model';

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

export const getRoommateTotals = createSelector(
  getRoommateById,
  roommate => {
    if (!roommate) {
      return null;
    }

    const to = roommate.expenses
      .filter(e => e.direction === 'To')
      .reduce((total, expense) => total + expense.amount, 0);
    const from = roommate.expenses
      .filter(e => e.direction === 'From')
      .reduce((total, expense) => total + expense.amount, 0);
    const total = to - from;
    return { to, from, total } as Totaller;
  }
);
