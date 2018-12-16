import * as toastActions from '../actions';

export interface State {
  open: boolean;
  message: string;
}

const initialState: State = {
  open: false,
  message: ''
};

export function reducer(
  state = initialState,
  action: toastActions.ToastActions
) {
  switch (action.type) {
    case toastActions.OPEN_TOAST:
      return {
        ...state,
        open: true,
        message: action.payload
      };
    case toastActions.CLOSE_TOAST:
      return {
        ...state,
        open: false,
        message: ''
      };
    default:
      return state;
  }
}
