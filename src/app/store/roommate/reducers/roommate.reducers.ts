import { Roommate } from '../../../shared/models/roommate.model';
import {
  RoommateActions,
  SET_ROOMMATE_DATA,
  FETCH_ROOMMATE_DATA
} from '../actions';
import { mapArrayOfObjectsToEntity } from 'src/app/utilties';

export interface State {
  roommates: RoommateEntity;
  loading: boolean;
  loaded: boolean;
}

export interface RoommateEntity {
  [key: string]: Roommate;
}

const initialState: State = {
  roommates: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: RoommateActions) {
  switch (action.type) {
    case FETCH_ROOMMATE_DATA:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case SET_ROOMMATE_DATA:
      return {
        ...state,
        roommates: mapArrayOfObjectsToEntity(action.payload, r => r.user.id),
        loaded: true,
        loading: false
      };
    default:
      return state;
  }
}
