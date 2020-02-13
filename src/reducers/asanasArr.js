const initialState = {
  groups: [
    { id: "stand", name: { ru: "Асаны стоя", en: "Stand" } },
    { id: "balance", name: { ru: "Балансы", en: "Balance" } },
    { id: "handbalance", name: { ru: "Балансы на руках", en: "Hand balance" } },
    { id: "forwardfold", name: { ru: "Наклоны", en: "Forward fold" } }
  ],
  arr: [
    {
      asanaName: {
        ru: "Тадасана",
        en: "Tadasana"
      },
      asanaImg: "/img/tadasana.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Уттхита Триконасана",
        en: "Utthita triconasana"
      },
      asanaImg: "/img/utrikonasana.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 3",
        en: "Virabhadrasana 3"
      },
      asanaImg: "/img/vira3.jpg",
      groupId: "balance"
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 2",
        en: "Virabhadrasana 2"
      },
      asanaImg: "/img/vira2.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Прасарита Падоттанасана",
        en: "Prasarita Padottanasana"
      },
      asanaImg: "/img/prasarita.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Врикшасана",
        en: "Vrikshasana"
      },
      asanaImg: "/img/vrikshasana.jpg",
      groupId: "balance"
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 1",
        en: "Virabhadrasana 1"
      },
      asanaImg: "/img/vira1.jpg",
      groupId: "stand"
    },
    {
      asanaName: {
        ru: "Лоласана",
        en: "Lolasana"
      },
      asanaImg: "/img/lola.jpg",
      groupId: "handbalance"
    },
    {
      asanaName: {
        ru: "Бакасана",
        en: "Bakasana"
      },
      asanaImg: "/img/bak.jpg",
      groupId: "handbalance"
    },
    {
      asanaName: {
        ru: "Бхуджапидасана",
        en: "Bhujapidasana"
      },
      asanaImg: "/img/bhudzh.jpg",
      groupId: "handbalance"
    },
    {
      asanaName: {
        ru: "Пашчимоттанасана",
        en: "Pashchimottanasana"
      },
      asanaImg: "/img/paschimot.jpg",
      groupId: "forwardfold"
    }
  ]
};

export function asanasArrReducer(state = initialState, action) {
  return state;
}
