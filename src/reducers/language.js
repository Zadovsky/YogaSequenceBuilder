import { CHANGE_LANG } from "../actions/LanguageChooserActions";
import { GET_COOKIES } from "../actions/ReadCookiesActions";

const initialState = {
  langList: {
    ru: {
      name: "Рус",
      img: "/img/rusflag.png",
    },
    en: {
      name: "Eng",
      img: "/img/engflag.png",
    },
  },
  curLang: "ru",
};

export function languageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, curLang: action.payload };

    case GET_COOKIES:
      if (action.payload.lang) {
        return { ...state, curLang: action.payload.lang };
      } else return state;

    default:
      return state;
  }
}
