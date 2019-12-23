const initialState = {
  groups: ["stand", "balance"],
  arr: [
    {
      asanaName: {
        ru: "Тадасана"
      },
      asanaImg: "/img/tadasana.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Уттхита Триконасана"
      },
      asanaImg: "/img/utrikonasana.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 3"
      },
      asanaImg: "/img/vira3.jpg",
      groupId: "balance"
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 2"
      },
      asanaImg: "/img/vira2.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Прасарита Падоттанасана"
      },
      asanaImg: "/img/prasarita.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Врикшасана"
      },
      asanaImg: "/img/vrikshasana.jpg",
      groupId: "balance"
    }
  ]
};

export function asanasReducer(state = initialState, action) {
  return state;
}
