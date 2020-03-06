import { ON_CLICK_SIGN_IN } from "../actions/SignInRegButtonsActions";
import {
  CANCEL_SIGN_IN,
  SIGN_IN_EMPTY_FIELD,
  CHANGE_EMAIL_SIGN_IN,
  CHANGE_PWD_SIGN_IN,
  LOGIN_CHECK
} from "../actions/SignInPopUpWindowActions";
import { CLOSE_INFO } from "../actions/InfoPopUpWindowActions";
import { EXIT_ACCOUNT } from "../actions/UserMenuActions";

const initialState = {
  login: null,
  password: null,
  signIn: {
    windowIsOpen: false,
    email: "",
    password: "",
    emailIsEmpty: false,
    pwdIsEmpty: false,
    loginFailed: false,
    loginSuccess: false
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
  },
  loginFailedWindowTexts: {
    ru: {
      title: "Неверный логин или пароль!",
      text: "Попробуйте ввести данные еще раз"
    },
    en: {
      title: "Wrong login or password!",
      text: "Please try to enter it once again"
    }
  },
  loginSuccessWindowTexts: {
    ru: {
      title: "Вы успешно авторизованы!",
      text: ""
    },
    en: {
      title: "You successfully signed in!",
      text: ""
    }
  }
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case EXIT_ACCOUNT:
      console.log(EXIT_ACCOUNT);
      return state;

    case CLOSE_INFO:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          loginFailed: false,
          loginSuccess: false
        }
      };

    case LOGIN_CHECK:
      if (action.payload === true) {
        return {
          ...state,
          login: state.signIn.email,
          password: state.signIn.password,
          signIn: {
            ...state.signIn,
            loginSuccess: true,
            windowIsOpen: false,
            email: "",
            password: "",
            emailIsEmpty: false,
            pwdIsEmpty: false
          }
        };
      } else {
        return {
          ...state,
          signIn: {
            ...state.signIn,
            loginFailed: true,
            emailIsEmpty: false,
            pwdIsEmpty: false
          }
        };
      }

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
          windowIsOpen: false,
          email: "",
          password: "",
          emailIsEmpty: false,
          pwdIsEmpty: false
        }
      };

    case SIGN_IN_EMPTY_FIELD:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          emailIsEmpty: state.signIn.email === "",
          pwdIsEmpty: state.signIn.password === ""
        }
      };

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
