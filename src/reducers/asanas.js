const initialState = {
  groupOrder: ["stand", "balance"],
  arr: [
    {
      asanaName: {
        ru: "Тадасана"
      },
      asanaImg: "/img/tadasana.jpg",
      group: "stand"
    },
    {
      asanaName: {
        ru: "Уттхита Триконасана"
      },
      asanaImg: "/img/utrikonasana.jpg",
      group: "stand"
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 3"
      },
      asanaImg: "/img/vira3.jpg",
      group: "balance"
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 2"
      },
      asanaImg: "/img/vira2.jpg",
      group: "stand"
    },
    {
      asanaName: {
        ru: "Прасарита Падоттанасана"
      },
      asanaImg: "/img/prasarita.jpg",
      group: "stand"
    },
    {
      asanaName: {
        ru: "Врикшасана"
      },
      asanaImg: "/img/vrikshasana.jpg",
      group: "balance"
    }
  ]
};

export function asanasReducer(state = initialState, action) {
  return state;
}
