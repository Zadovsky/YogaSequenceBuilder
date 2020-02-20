import { ON_CLICK_SIGN_IN } from "../actions/SignInRegButtonsActions";
import { CANCEL_SIGN_IN } from "../actions/SignInPopUpWindowActions";

const initialState = {
  user: null,
  passwordMd5: null,
  signInWindowIsOpen: false
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_SIGN_IN:
      return { ...state, signInWindowIsOpen: true };
    case CANCEL_SIGN_IN:
      return { ...state, signInWindowIsOpen: false };
    default:
      return state;
  }
}
