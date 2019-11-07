const initialState = [
  {
    asanaName: {
      ru: "Тадасана"
    },
    asanaImg: "/img/tadasana.jpg"
  },
  {
    asanaName: {
      ru: "Уттхита Триконасана"
    },
    asanaImg: "/img/utrikonasana.jpg"
  },
  {
    asanaName: {
      ru: "Вирабхадрасана 3"
    },
    asanaImg: "/img/vira3.jpg"
  },
  {
    asanaName: {
      ru: "Вирабхадрасана 2"
    },
    asanaImg: "/img/vira2.jpg"
  },
  {
    asanaName: {
      ru: "Прасарита Падоттанасана"
    },
    asanaImg: "/img/prasarita.jpg"
  },
  {
    asanaName: {
      ru: "Врикшасана"
    },
    asanaImg: "/img/vrikshasana.jpg"
  }
];

export function asanasReducer(state = initialState, action) {
  return state;
}
