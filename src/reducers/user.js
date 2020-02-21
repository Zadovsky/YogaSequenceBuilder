import { ON_CLICK_SIGN_IN } from "../actions/SignInRegButtonsActions";
import {
  CANCEL_SIGN_IN,
  SIGN_IN,
  CHANGE_EMAIL_SIGN_IN,
  CHANGE_PWD_SIGN_IN
} from "../actions/SignInPopUpWindowActions";

const initialState = {
  user: null,
  passwordMd5: null,
  signIn: {
    windowIsOpen: false,
    email: "",
    password: "",
    emailIsEmpty: false,
    pwdIsEmpty: false
  },
  signInWindowTexts: {
    ru: {
      title: "Вход в аккаунт",
      emailFieldLabel: "Ваш e-mail",
      passwordLabel: "Пароль",
      forgotPwdText: "Забыли пароль?",
      cancelText: "Отмена",
      signInText: "Вход",
      emptyFieldMsg: "Заполните это поле"
    },
    en: {
      title: "Sign in account",
      emailFieldLabel: "Your e-mail",
      passwordLabel: "Password",
      forgotPwdText: "Forgot password?",
      cancelText: "Cancel",
      signInText: "Sign in",
      emptyFieldMsg: "Fill the field"
    }
  }
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_SIGN_IN:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          windowIsOpen: true
        }
      };
    case CANCEL_SIGN_IN:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          windowIsOpen: false
        }
      };
    case SIGN_IN:
      if (state.signIn.email === "" || state.signIn.password === "") {
        return {
          ...state,
          signIn: {
            ...state.signIn,
            emailIsEmpty: state.signIn.email === "",
            pwdIsEmpty: state.signIn.password === ""
          }
        };
      } else return state;
    case CHANGE_EMAIL_SIGN_IN:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          email: action.payload
        }
      };
    case CHANGE_PWD_SIGN_IN:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          password: action.payload
        }
      };
    default:
      return state;
  }
}
