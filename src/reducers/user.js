import {
  ON_CLICK_SIGN_IN,
  ON_CLICK_REG
} from "../actions/SignInRegButtonsActions";
import { GET_LOGIN_COOKIES } from "../actions/ReadCookiesActions";
import {
  CANCEL_SIGN_IN,
  SIGN_IN_EMPTY_FIELD,
  CHANGE_EMAIL_SIGN_IN,
  CHANGE_PWD_SIGN_IN,
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAIL,
  FORGOT_PWD
} from "../actions/SignInPopUpWindowActions";
import {
  CANCEL_FORGOT_PWD,
  PWD_SENT_TO_EMAIL,
  NO_SUCH_LOGIN,
  CHANGE_EMAIL_FORGOT_PWD,
  FORGOT_PWD_EMPTY_FIELD
} from "../actions/ForgotPwdPopUpWindowActions";
import {
  CONFIRM_EXIT,
  REFUSE_EXIT,
  CONFIRM_CHANGE_PASSWORD,
  REFUSE_CHANGE_PASSWORD
} from "../actions/YesNoPopUpWindowActions";
import {
  USER_MENU_CLOSE,
  USERNAME_CLICK,
  EXIT_ACCOUNT,
  CHANGE_PASSWORD
} from "../actions/UserMenuActions";
import {
  CANCEL_REG,
  CHANGE_EMAIL_REG,
  NOT_EMAIL_REG,
  LOGIN_REGED,
  LOGIN_ALREADY_EXIST
} from "../actions/RegPopUpWindowActions";

const initialState = {
  login: null,
  password: null,
  userMenu: { isOpen: false, anchorEl: null },
  sureToExitIsOpen: false,
  sureToChangePwdIsOpen: false,
  signIn: {
    windowIsOpen: false,
    email: "",
    password: "",
    emailIsEmpty: false,
    pwdIsEmpty: false
  },
  forgotPwd: {
    isOpen: false,
    email: "",
    emailIsEmpty: false
  },
  registration: {
    isOpen: false,
    email: "",
    notEmail: false
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
  sureToExitTexts: {
    ru: {
      title: "Вы уверены, что хотите выйти из аккаунта?",
      text: ""
    },
    en: {
      title: "Are you sure to exit the account?",
      text: ""
    }
  },
  sureToChangePwdTexts: {
    ru: {
      title: "Вы уверены, что хотите сменить пароль?",
      text: ""
    },
    en: {
      title: "Are you sure to change the password?",
      text: ""
    }
  },
  userMenuTexts: {
    ru: {
      cnangePwd: "Сменить пароль",
      exit: "Выход"
    },
    en: {
      cnangePwd: "Change password",
      exit: "Exit"
    }
  },
  forgotPwdTexts: {
    ru: {
      title: "Восстановление пароля",
      emailFieldLabel: "Ваш e-mail",
      cancelText: "Отмена",
      confirmText: "Восстановить",
      emptyFieldMsg: "Заполните это поле"
    },
    en: {
      title: "Password recovery",
      emailFieldLabel: "Your e-mail",
      cancelText: "Cancel",
      confirmText: "Recover",
      emptyFieldMsg: "Fill the field"
    }
  },
  regTexts: {
    ru: {
      title: "Регистрация",
      text:
        "Для регистрации нужен только e-mail. Мы отправим на него пароль для входа в аккаунт.",
      emailFieldLabel: "Ваш e-mail",
      cancelText: "Отмена",
      confirmText: "Регистрация",
      notEmailMsg: "Это не e-mail"
    },
    en: {
      title: "Registration",
      text:
        "To registration you have to enter e-mail only. We'll send you password to enter account.",
      emailFieldLabel: "Your e-mail",
      cancelText: "Cancel",
      confirmText: "Registration",
      notEmailMsg: "that's not e-mail"
    }
  }
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ALREADY_EXIST:
      return {
        ...state,
        registration: {
          ...state.registration,
          notEmail: false
        }
      };

    case LOGIN_REGED:
      return {
        ...state,
        registration: {
          ...state.registration,
          isOpen: false,
          email: "",
          notEmail: false
        }
      };

    case NOT_EMAIL_REG:
      return {
        ...state,
        registration: {
          ...state.registration,
          notEmail: true
        }
      };

    case CHANGE_EMAIL_REG:
      return {
        ...state,
        registration: {
          ...state.registration,
          email: action.payload
        }
      };

    case CANCEL_REG:
      return {
        ...state,
        registration: {
          ...state.registration,
          isOpen: false,
          email: "",
          notEmail: false
        }
      };

    case ON_CLICK_REG:
      return {
        ...state,
        registration: {
          ...state.registration,
          isOpen: true
        }
      };

    case GET_LOGIN_COOKIES:
      return {
        ...state,
        login: action.payload.login,
        password: action.payload.password
      };

    case FORGOT_PWD:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          isOpen: true
        },
        signIn: {
          ...state.signIn,
          windowIsOpen: false,
          email: "",
          password: "",
          emailIsEmpty: false,
          pwdIsEmpty: false
        }
      };

    case CANCEL_FORGOT_PWD:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          isOpen: false,
          email: "",
          emailIsEmpty: false
        }
      };

    case PWD_SENT_TO_EMAIL:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          isOpen: false,
          email: "",
          emailIsEmpty: false
        }
      };

    case NO_SUCH_LOGIN:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          emailIsEmpty: false
        }
      };

    case CHANGE_EMAIL_FORGOT_PWD:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          email: action.payload
        }
      };

    case FORGOT_PWD_EMPTY_FIELD:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          emailIsEmpty: true
        }
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        userMenu: {
          ...state.userMenu,
          isOpen: false,
          anchorEl: null
        },
        sureToChangePwdIsOpen: true
      };

    case CONFIRM_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
        sureToChangePwdIsOpen: false
      };

    case REFUSE_CHANGE_PASSWORD:
      return { ...state, sureToChangePwdIsOpen: false };

    case CONFIRM_EXIT:
      return {
        ...state,
        login: null,
        password: null,
        sureToExitIsOpen: false
      };

    case REFUSE_EXIT:
      return {
        ...state,
        sureToExitIsOpen: false
      };

    case USERNAME_CLICK:
      return {
        ...state,
        userMenu: {
          ...state.userMenu,
          isOpen: true,
          anchorEl: action.payload
        }
      };

    case USER_MENU_CLOSE:
      return {
        ...state,
        userMenu: {
          ...state.userMenu,
          isOpen: false,
          anchorEl: null
        }
      };

    case EXIT_ACCOUNT:
      return {
        ...state,
        userMenu: {
          ...state.userMenu,
          isOpen: false,
          anchorEl: null
        },
        sureToExitIsOpen: true
      };

    case LOGIN_CHECK_SUCCESS:
      return {
        ...state,
        login: state.signIn.email,
        password: state.signIn.password,
        signIn: {
          ...state.signIn,
          windowIsOpen: false,
          email: "",
          password: "",
          emailIsEmpty: false,
          pwdIsEmpty: false
        }
      };

    case LOGIN_CHECK_FAIL:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          emailIsEmpty: false,
          pwdIsEmpty: false
        }
      };

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
