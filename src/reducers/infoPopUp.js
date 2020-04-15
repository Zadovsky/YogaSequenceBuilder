import { CLOSE_INFO_POPUP } from "../actions/InfoPopUpWindowActions";
import {
  LOGIN_REGED,
  LOGIN_ALREADY_EXIST,
} from "../actions/RegPopUpWindowActions";
import {
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAIL,
} from "../actions/SignInPopUpWindowActions";
import {
  PWD_SENT_TO_EMAIL,
  NO_SUCH_LOGIN,
} from "../actions/ForgotPwdPopUpWindowActions";
import { CONFIRM_CHANGE_PASSWORD } from "../actions/YesNoPopUpWindowActions";
import {
  NO_AUTHORIZATION_SAVE,
  NO_AUTHORIZATION_LOAD,
} from "../actions/SaveLoadPdfButtonsActions";
import {
  SAVE_SUCCESS,
  REWRITE_SUCCESS,
  NO_SEQ_NAME,
  EMPTY_SEQ_NAME_LOAD,
} from "../actions/SequencesListActions";

const initialState = {
  isOpen: false,
  texts: null,
  loginExistTexts: {
    ru: { title: "Этот e-mail уже зарегистрирован", text: "" },
    en: { title: "That e-mail is registered already", text: "" },
  },
  loginRegedTexts: {
    ru: {
      title: "Вы успешно зарегистрированы",
      text:
        "Мы отправили пароль на указанный e-mail. Используйте его для входа в аккаунт.",
    },
    en: {
      title: "You've been successfully registered",
      text: "We've sent password on the e-mail. Use it to enter the account.",
    },
  },
  pwdSentTexts: {
    ru: { title: "Пароль отправлен на указанный e-mail", text: "" },
    en: { title: "Password sent to the e-mail", text: "" },
  },
  noLoginTexts: {
    ru: { title: "Такого аккаунта нет", text: "Проверьте указанный e-mail" },
    en: { title: "There is no such account", text: "Check the e-mail" },
  },
  pwdChangedTexts: {
    ru: {
      title: "Пароль успешно изменен!",
      text: "Мы отправили новый пароль на ваш e-mail",
    },
    en: {
      title: "Password successfuly changed!",
      text: "We've sent new password on the e-mail",
    },
  },
  loginFailedWindowTexts: {
    ru: {
      title: "Неверный логин или пароль!",
      text: "Попробуйте ввести данные еще раз",
    },
    en: {
      title: "Wrong login or password!",
      text: "Please try to enter it once again",
    },
  },
  loginSuccessWindowTexts: {
    ru: {
      title: "Вы успешно авторизованы!",
      text: "",
    },
    en: {
      title: "You successfully signed in!",
      text: "",
    },
  },
  noAuthorizationSaveTexts: {
    ru: {
      title: "Войдите в аккаунт",
      text:
        "Чтобы сохранить последовательность асан, войдите в свой аккаунт или зарегистрируйте новый",
    },
    en: {
      title: "Sign in to your account",
      text: "Sign in to your account or register new one to save the sequence",
    },
  },
  noAuthorizationLoadTexts: {
    ru: {
      title: "Войдите в аккаунт",
      text: "Чтобы загрузить последовательность асан, войдите в свой аккаунт",
    },
    en: {
      title: "Sign in to your account",
      text: "Sign in to your account to load the sequence",
    },
  },
  saveSuccessTexts: {
    ru: {
      title: "Последовательность успешно сохранена",
      text: "",
    },
    en: {
      title: "Sequence successfully saved",
      text: "",
    },
  },
  noSeqNameTexts: {
    ru: {
      title: "Последовательности с таким именем нет",
      text: "",
    },
    en: {
      title: "There is no such sequence name",
      text: "",
    },
  },
  emptySeqNameLoadTexts: {
    ru: {
      title: "Выберите последовательность для загрузки",
      text: "",
    },
    en: {
      title: "You should choose sequence to load",
      text: "",
    },
  },
};

export function infoPopUpReducer(state = initialState, action) {
  switch (action.type) {
    case NO_SEQ_NAME:
      return { ...state, isOpen: true, texts: state.noSeqNameTexts };

    case EMPTY_SEQ_NAME_LOAD:
      return { ...state, isOpen: true, texts: state.emptySeqNameLoadTexts };

    case SAVE_SUCCESS:
      return { ...state, isOpen: true, texts: state.saveSuccessTexts };

    case REWRITE_SUCCESS:
      return { ...state, isOpen: true, texts: state.saveSuccessTexts };

    case NO_AUTHORIZATION_SAVE:
      return { ...state, isOpen: true, texts: state.noAuthorizationSaveTexts };

    case NO_AUTHORIZATION_LOAD:
      return { ...state, isOpen: true, texts: state.noAuthorizationLoadTexts };

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
