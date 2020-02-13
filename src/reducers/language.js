import { CHANGE_LANG } from "../actions/LanguageChooserActions";

const initialState = {
  langList: {
    ru: {
      name: "Рус",
      img: "/img/rusflag.png"
    },
    en: {
      name: "Eng",
      img: "/img/engflag.png"
    }
  },
  curLang: "ru"
};

export function languageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return { ...state, curLang: action.payload };

    default:
      return state;
  }
}
