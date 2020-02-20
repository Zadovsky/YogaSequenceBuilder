import { ON_CLICK_SIGN_IN } from "../actions/SignInRegButtonsActions";
import { CANCEL_SIGN_IN } from "../actions/SignInPopUpWindowActions";

const initialState = {
  user: null,
  passwordMd5: null,
  signInWindowIsOpen: false,
  signInWindowTexts: {
    ru: {
      title: "Вход в аккаунт",
      emailFieldLabel: "Ваш e-mail",
      passwordLabel: "Пароль",
      forgotPwdText: "Забыли пароль?",
      cancelText: "Отмена",
      signInText: "Вход"
    },
    en: {
      title: "Sign in account",
      emailFieldLabel: "Your e-mail",
      passwordLabel: "Password",
      forgotPwdText: "Forgot password?",
      cancelText: "Cancel",
      signInText: "Sign in"
    }
  }
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
