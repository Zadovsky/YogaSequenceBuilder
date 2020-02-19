import { ON_CLICK_SIGN_IN } from "../actions/SignInRegButtonsActions";

const initialState = {
  user: null,
  passwordMd5: null
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_SIGN_IN:
      console.log(ON_CLICK_SIGN_IN);
      return state;
    default:
      return state;
  }
}
