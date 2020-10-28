import { GET_COOKIES } from "../actions/ReadCookiesActions";
import { LOGIN_CHECK_SUCCESS } from "../actions/SignInPopUpWindowActions";
import { LOGIN_REGED } from "../actions/RegPopUpWindowActions";
import {
  CONFIRM_EXIT,
  CONFIRM_CHANGE_PASSWORD,
} from "../actions/YesNoPopUpWindowActions";

const initialState = {
  login: null,
  password: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REGED:
      return {
        ...state,
        login: action.payload.login,
        password: action.payload.password,
      };

    case GET_COOKIES:
      return {
        ...state,
        login: action.payload.login,
        password: action.payload.password,
      };

    case CONFIRM_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };

    case CONFIRM_EXIT:
      return {
        ...state,
        login: null,
        password: null,
      };

    case LOGIN_CHECK_SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        password: action.payload.password,
      };

    default:
      return state;
  }
}
