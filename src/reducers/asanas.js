import { ON_CLICK_ASANAS_NAVIGATION } from "../actions/AsanasNavigationActions";

const initialState = {
  groups: [
    { id: "stand", name: { ru: "Асаны стоя" } },
    { id: "balance", name: { ru: "Балансы" } },
    { id: "handbalance", name: { ru: "Балансы на руках" } },
    { id: "forwardfold", name: { ru: "Наклоны" } }
  ],
  selectedGroupId: null,
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
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 1"
      },
      asanaImg: "/img/vira1.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Лоласана"
      },
      asanaImg: "/img/lola.jpg",
      groupId: "handbalance"
    },
    {
      asanaName: {
        ru: "Бакасана"
      },
      asanaImg: "/img/bak.jpg",
      groupId: "handbalance"
    },
    {
      asanaName: {
        ru: "Бхуджапидасана"
      },
      asanaImg: "/img/bhudzh.jpg",
      groupId: "handbalance"
    },
    {
      asanaName: {
        ru: "Пашчимоттанасана"
      },
      asanaImg: "/img/paschimot.jpg",
      groupId: "forwardfold"
    }
  ]
};

export function asanasReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_ASANAS_NAVIGATION:
      return { ...state, selectedGroupId: action.payload };

    default:
      return state;
  }
}
