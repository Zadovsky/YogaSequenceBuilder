const initialState = {
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
    default:
      return state;
  }
}
