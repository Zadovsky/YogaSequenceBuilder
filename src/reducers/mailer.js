import { SENT_MAIL } from "../actions/MailerActions";
import { LOGIN_REGED } from "../actions/RegPopUpWindowActions";

const initialState = {
  sent: false,
  email: null,
  texts: null,
  loginRegedText: {
    ru: {
      subj: "Реквизиты для входа в аккаунт YogaSequenceBuilder.online",
      text:
        "Добрый день! <br> Ваш аккаунт YogaSequenceBuilder.online зарегистрирован на этот адрес. <br> Пароль для входа: #PASSWORD <br> Желаем хорошей практики!",
    },
    en: {
      subj: "YogaSequenceBuilder.online registration information",
      text:
        "Hello! <br> Your YogaSequenceBuilder.online account is registered on this e-mail. <br> Password to enter is: #PASSWORD <br> Have a good practice!",
    },
  },
};

function changeKeyWord(text, keyWord, exchange) {
  let resultText = {};
  for (let key1 in text) {
    resultText[key1] = {};
    for (let key2 in text[key1]) {
      const curStr = text[key1][key2];
      let keyWordIndex = curStr.indexOf(keyWord);
      if (keyWordIndex > -1) {
        resultText[key1][key2] =
          curStr.slice(0, keyWordIndex) +
          exchange +
          curStr.slice(keyWordIndex + keyWord.length);
      } else resultText[key1][key2] = curStr;
    }
  }
  return resultText;
}

export function mailerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REGED:
      return {
        ...state,
        sent: true,
        email: action.payload.login,
        texts: changeKeyWord(
          state.loginRegedText,
          "#PASSWORD",
          action.payload.password
        ),
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
