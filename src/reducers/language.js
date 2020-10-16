import { CHANGE_LANG } from "../actions/LanguageChooserActions";
import { GET_COOKIES } from "../actions/ReadCookiesActions";
import { SET_LANG_BY_IP } from "../actions/CheckLangActions";

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
  curLang: "en",
};

export function languageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANG_BY_IP:
      console.log(action.payload);
      return state;
    // return { ...state, curLang: action.payload };

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
