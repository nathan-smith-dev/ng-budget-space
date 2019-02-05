import { Roommate } from '../../../shared/models/roommate.model';
import {
  RoommateActions,
  SET_ROOMMATE_DATA,
  FETCH_ROOMMATE_DATA
} from '../actions';

export interface State {
  roommates: Roommate[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  roommates: [],
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
        roommates: action.payload,
        loaded: true,
        loading: false
      };
    default:
      return state;
  }
}
