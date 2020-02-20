import { ON_CLICK_SIGN_IN } from "../actions/SignInRegButtonsActions";

const initialState = {
  user: null,
  passwordMd5: null,
  signInWindowIsOpen: false
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_SIGN_IN:
      return { ...state, signInWindowIsOpen: true };
    default:
      return state;
  }
}
