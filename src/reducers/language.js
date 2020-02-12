const initialState = {
  langs: {
    ru: {
      name: "Рус",
      flag: "/img/rusflag.png"
    },
    en: {
      name: "Eng",
      flag: "/img/engflag.png"
    }
  },
  curLang: "ru"
};

export function languageReducer(state = initialState, action) {
  return state;
}
