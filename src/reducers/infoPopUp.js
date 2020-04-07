import { CLOSE_INFO_POPUP } from "../actions/InfoPopUpWindowActions";
import {
  LOGIN_REGED,
  LOGIN_ALREADY_EXIST
} from "../actions/RegPopUpWindowActions";
import {
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAIL
} from "../actions/SignInPopUpWindowActions";
import {
  PWD_SENT_TO_EMAIL,
  NO_SUCH_LOGIN
} from "../actions/ForgotPwdPopUpWindowActions";
import { CONFIRM_CHANGE_PASSWORD } from "../actions/YesNoPopUpWindowActions";
import { NO_AUTHORIZATION } from "../actions/SaveLoadPdfButtonsActions";
import { SAVE_SUCCESS } from "../actions/SequencesListActions";

const initialState = {
  isOpen: false,
  texts: null,
  loginExistTexts: {
    ru: { title: "Этот e-mail уже зарегистрирован", text: "" },
    en: { title: "That e-mail is registered already", text: "" }
  },
  loginRegedTexts: {
    ru: {
      title: "Вы успешно зарегистрированы",
      text:
        "Мы отправили пароль на указанный e-mail. Используйте его для входа в аккаунт."
    },
    en: {
      title: "You've been successfully registered",
      text: "We've sent password on the e-mail. Use it to enter the account."
    }
  },
  pwdSentTexts: {
    ru: { title: "Пароль отправлен на указанный e-mail", text: "" },
    en: { title: "Password sent to the e-mail", text: "" }
  },
  noLoginTexts: {
    ru: { title: "Такого аккаунта нет", text: "Проверьте указанный e-mail" },
    en: { title: "There is no such account", text: "Check the e-mail" }
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
  noAuthorizationTexts: {
    ru: {
      title: "Войдите в аккаунт",
      text:
        "Чтобы сохранить комплекс асан, войдите в свой аккаунт или зарегистрируйте новый"
    },
    en: {
      title: "Sign in to your account",
      text: "Sign in to your account or register new one to save the sequence"
    }
  },
  saveSuccessTexts: {
    ru: {
      title: "Последовательность успешно сохранена",
      text: ""
    },
    en: {
      title: "Sequence successfully saved",
      text: ""
    }
  }
};

export function infoPopUpReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SUCCESS:
      return { ...state, isOpen: true, texts: state.saveSuccessTexts };

    case NO_AUTHORIZATION:
      return { ...state, isOpen: true, texts: state.noAuthorizationTexts };

    case LOGIN_ALREADY_EXIST:
      return { ...state, isOpen: true, texts: state.loginExistTexts };

    case LOGIN_REGED:
      return { ...state, isOpen: true, texts: state.loginRegedTexts };

    case PWD_SENT_TO_EMAIL:
      return { ...state, isOpen: true, texts: state.pwdSentTexts };

    case NO_SUCH_LOGIN:
      return { ...state, isOpen: true, texts: state.noLoginTexts };

    case CONFIRM_CHANGE_PASSWORD:
      return { ...state, isOpen: true, texts: state.pwdChangedTexts };

    case LOGIN_CHECK_SUCCESS:
      return { ...state, isOpen: true, texts: state.loginSuccessWindowTexts };

    case LOGIN_CHECK_FAIL:
      return { ...state, isOpen: true, texts: state.loginFailedWindowTexts };

    case CLOSE_INFO_POPUP:
      return { ...state, isOpen: false, texts: null };

    default:
      return state;
  }
}
