export const initialState = {
  language: "ru",
  schedule: {
    cards: [
      { cardKey: 0, asanaIndex: 0 },
      { cardKey: 1, asanaIndex: 3 },
      { cardKey: 2, asanaIndex: 1 },
      { cardKey: 3, asanaIndex: 4 }
    ],
    nextCardKey: 4,
    dragging: null,
    dragOver: null,
    fastTransition: false
  },
  asanas: [
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
  ]
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ASANA":
      return {
        ...state,
        schedule: {
          ...state.schedule,
          cards: [
            ...state.schedule.cards,
            { cardKey: state.schedule.nextCardKey, asanaIndex: action.payload }
          ],
          nextCardKey: state.schedule.nextCardKey + 1
        }
      };

    case "START_DRAG_ASANAS":
      return {
        ...state
      };

    case "START_DRAG_SCHEDULE":
      // console.log("START_DRAG_SCHEDULE");
      return {
        ...state,
        schedule: {
          ...state.schedule,
          dragging: action.payload,
          dragOver: action.payload + 1,
          fastTransition: true
        }
      };

    case "DRAG_ENTER_CARD_ASANAS":
      return {
        ...state
      };

    case "DRAG_ENTER_CARD_SCHEDULE":
      // console.log("DRAG_ENTER_CARD_SCHEDULE");
      // console.log(action.payload);

      var newDragOver = action.payload;
      if (state.schedule.dragOver === newDragOver) {
        newDragOver += 1;
      }

      return {
        ...state,
        schedule: {
          ...state.schedule,
          dragOver: newDragOver,
          fastTransition: false
        }
      };

    case "DRAG_ENTER_EMPTY_SPACE":
      // console.log("DRAG_ENTER_EMPTY_SPACE");
      return {
        ...state,
        schedule: {
          ...state.schedule,
          dragOver: null,
          fastTransition: false
        }
      };

    case "DRAG_ENTER_PLACEHOLDER":
      // console.log("DRAG_ENTER_PLACEHOLDER");
      // console.log(action.payload);
      return {
        ...state
        // schedule: { ...state.schedule, dragOver: action.payload }
      };

    case "DRAG_LEAVE_PLACEHOLDER":
      // console.log("DRAG_LEAVE_PLACEHOLDER");
      // console.log("null");
      return {
        ...state
        // schedule: { ...state.schedule, dragOver: null }
      };

    case "DRAG_LEAVE":
      return {
        ...state
      };

    case "DRAG_LEAVE_GRID":
      // console.log("DRAG_LEAVE_GRID");
      return {
        ...state
        // schedule: { ...state.schedule, dragOver: null, fastTransition: false }
      };

    case "END_DRAG":
      var { dragOver, dragging } = state.schedule;
      // console.log("END_DRAG");
      // console.log(dragOver);
      const dragCard = state.schedule.cards[dragging];
      var cardsBegin = state.schedule.cards.slice(0, dragging);
      var cardsEnd = state.schedule.cards.slice(dragging + 1);
      var cards = [...cardsBegin, ...cardsEnd];

      if (dragOver === null) {
        cards.push(dragCard);
      } else {
        if (dragOver > dragging) {
          dragOver -= 1;
        }
        cardsBegin = cards.slice(0, dragOver);
        cardsEnd = cards.slice(dragOver);
        cards = [...cardsBegin, dragCard, ...cardsEnd];
      }

      return {
        ...state,
        schedule: {
          ...state.schedule,
          cards: cards,
          dragOver: null,
          dragging: null,
          fastTransition: true
        }
      };

    default:
      return state;
  }
}
