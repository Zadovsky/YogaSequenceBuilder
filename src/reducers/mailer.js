import { SENT_MAIL } from "../actions/MailerActions";
import { LOGIN_REGED } from "../actions/RegPopUpWindowActions";

const initialState = {
  sent: false,
  email: null,
  texts: null,
  loginRegedText: {
    ru: {
      subj: "Тест",
      text: "тест",
    },
    en: {
      subj: "Test",
      text: "test",
    },
  },
};

export function mailerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REGED:
      return {
        ...state,
        sent: true,
        email: action.payload.login,
        texts: state.loginRegedText,
      };

    case SENT_MAIL:
      return {
        ...state,
        sent: false,
      };

    default:
      return state;
  }
}
