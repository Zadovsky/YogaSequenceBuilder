import { CLOSE_INTRO, CHANGE_INTRO_SLIDE } from "../actions/IntroWindowActions";
import { GET_COOKIES } from "../actions/ReadCookiesActions";

const initialState = {
  isOpen: false,
  curSlide: 0,
  nextButtonText: {
    ru: "Далее",
    en: "Next",
  },
  texts: [
    {
      ru: {
        title: "Что такое Yoga Sequence Builder?",
        text:
          "Это приложение для планирования последовательностей асан практики хатха-йоги",
      },
      en: {
        title: "What is Yoga Sequence Builder?",
        text: "The application will help you to plan your yoga practice",
      },
    },
    {
      ru: {
        title: "Как это работает?",
        text:
          "Перетаскивайте карточки из списка асан в панель расписания. Меняйте асаны и блоки асан местами. На мобильном устройстве для начала перетаскивания удерживайте нажатие в течении 1сек.",
      },
      en: {
        title: "How it works?",
        text:
          "Drag’n’drop cards from asanas list to schedule panel. Swap asanas and asanas blocks. On mobile devices to start drag’n’drop hold your touch for 1sec.",
      },
    },
    {
      ru: {
        title: "Авторизуйтесь",
        text:
          "Авторизуйтесь и сохраняйте комплексы асан в личную коллекцию. Загружайте, редактируйте и сохраняйте комплексы асан когда это вам потребуется.",
      },
      en: {
        title: "Log in",
        text:
          "Log in and save your sequences to collection. Load, edit and save it any time you need.",
      },
    },
    {
      ru: {
        title: "PDF",
        text:
          "Сохраняйте комплексы асан в PDF формате для распечатки или просмотра на мобильном устройстве.",
      },
      en: {
        title: "PDF",
        text: "Save your sequences to pdf to print or view on mobile device.",
      },
    },
  ],
};

export function introReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COOKIES:
      return {
        ...state,
        isOpen: action.payload.firstStart,
      };

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
