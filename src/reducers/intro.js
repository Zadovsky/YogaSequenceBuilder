import { CLOSE_INTRO, CHANGE_INTRO_SLIDE } from "../actions/IntroWindowActions";

const initialState = {
  isOpen: true,
  curSlide: 0,
  nextButtonText: {
    ru: "Далее",
    en: "Next",
  },
  texts: [
    {
      ru: {
        title: "Заголовок 1",
        text: "Текст 1",
      },
      en: {
        title: "Title 1",
        text: "Text 1",
      },
    },
    {
      ru: {
        title: "Заголовок 2",
        text: "Текст 2",
      },
      en: {
        title: "Title 2",
        text: "Text 2",
      },
    },
  ],
};

export function introReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INTRO_SLIDE:
      return {
        ...state,
        curSlide: action.payload,
      };

    case CLOSE_INTRO:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}
