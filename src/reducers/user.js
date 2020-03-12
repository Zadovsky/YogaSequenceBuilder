import { ON_CLICK_SIGN_IN } from "../actions/SignInRegButtonsActions";
import {
  CANCEL_SIGN_IN,
  SIGN_IN_EMPTY_FIELD,
  CHANGE_EMAIL_SIGN_IN,
  CHANGE_PWD_SIGN_IN,
  LOGIN_CHECK,
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
  CLOSE_LOGIN_SUCCESS_INFO,
  CLOSE_LOGIN_FAILED_INFO,
  CLOSE_PASSWORD_CHANGED_INFO,
  CLOSE_PASSWORD_SENT_INFO,
  CLOSE_NO_LOGIN_INFO
} from "../actions/InfoPopUpWindowActions";
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

const initialState = {
  login: null,
  password: null,
  userMenu: { isOpen: false, anchorEl: null },
  sureToExitIsOpen: false,
  sureToChangePwdIsOpen: false,
  pwdChangedInfoIsOpen: false,
  signIn: {
    windowIsOpen: false,
    email: "",
    password: "",
    emailIsEmpty: false,
    pwdIsEmpty: false,
    loginFailed: false,
    loginSuccess: false
  },
  forgotPwd: {
    isOpen: false,
    email: "",
    emailIsEmpty: false,
    pwdSent: false,
    noLogin: false
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
  pwdChangedTexts: {
    ru: {
      title: "Пароль успешно изменен!",
      text: "Мы отправили новый пароль на ваш e-mail"
    },
    en: {
      title: "Password successfuly changed!",
      text: "We've sent new password on the e-mail"
    }
  },
  forgotPwdTexts: {
    ru: {
      title: "Восстановление пароля",
      emailFieldLabel: "Ваш e-mail",
      cancelText: "Отмена",
      confirmText: "Восстановить",
      emptyFieldMsg: "Заполните это поле",
      pwdSent: {
        title: "Пароль отправлен на указанный e-mail",
        text: ""
      },
      noLogin: {
        title: "Такого аккаунта нет",
        text: "Проверьте указанный e-mail"
      }
    },
    en: {
      title: "Password recovery",
      emailFieldLabel: "Your e-mail",
      cancelText: "Cancel",
      confirmText: "Recover",
      emptyFieldMsg: "Fill the field",
      pwdSent: {
        title: "Password sent to the e-mail",
        text: ""
      },
      noLogin: {
        title: "There is no such account",
        text: "Check the e-mail"
      }
    }
  }
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
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
          emailIsEmpty: false,
          pwdSent: true
        }
      };

    case CLOSE_PASSWORD_SENT_INFO:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          pwdSent: false
        }
      };

    case CLOSE_NO_LOGIN_INFO:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          noLogin: false
        }
      };

    case NO_SUCH_LOGIN:
      return {
        ...state,
        forgotPwd: {
          ...state.forgotPwd,
          emailIsEmpty: false,
          noLogin: true
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
        sureToChangePwdIsOpen: false,
        pwdChangedInfoIsOpen: true
      };

    case REFUSE_CHANGE_PASSWORD:
      return { ...state, sureToChangePwdIsOpen: false };

    case CLOSE_PASSWORD_CHANGED_INFO:
      return { ...state, pwdChangedInfoIsOpen: false };

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

    case CLOSE_LOGIN_SUCCESS_INFO:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          loginSuccess: false
        }
      };

    case CLOSE_LOGIN_FAILED_INFO:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          loginFailed: false
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
