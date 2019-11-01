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
    dragSource: null,
    dragging: null,
    dragOver: null,
    fastTransition: false,
    onPlaceHolder: false
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
    case "ADD_ASANA_ASANAS":
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

    case "ADD_ASANA_SCHEDULE":
      return {
        ...state
      };

    case "START_DRAG_ASANAS":
      return {
        ...state,
        schedule: {
          ...state.schedule,
          dragSource: action.payload.source,
          dragging: action.payload.card,
          dragOver: null,
          fastTransition: false,
          onPlaceHolder: false
        }
      };

    case "START_DRAG_SCHEDULE":
      return {
        ...state,
        schedule: {
          ...state.schedule,
          dragSource: action.payload.source,
          dragging: action.payload.card,
          dragOver: action.payload.card + 1,
          fastTransition: true,
          onPlaceHolder: true
        }
      };

    case "DRAG_ENTER_CARD_ASANAS":
      return {
        ...state
      };

    case "DRAG_ENTER_CARD_SCHEDULE":
      var newDragOver = action.payload;
      if (
        (state.schedule.dragOver === newDragOver &&
          state.schedule.onPlaceHolder) ||
        (state.schedule.dragOver < newDragOver - 1 &&
          state.schedule.dragOver != null)
      ) {
        newDragOver += 1;
      }

      return {
        ...state,
        schedule: {
          ...state.schedule,
          dragOver: newDragOver,
          fastTransition: false,
          onPlaceHolder: false
        }
      };

    case "DRAG_ENTER_EMPTY_SPACE_SCHEDULE":
      return {
        ...state,
        schedule: {
          ...state.schedule,
          dragOver: state.schedule.cards.length,
          fastTransition: false,
          onPlaceHolder: false
        }
      };

    case "DRAG_ENTER_EMPTY_SPACE_ASANAS":
      return {
        ...state
      };

    case "DRAG_ENTER_PLACEHOLDER":
      return {
        ...state,
        schedule: { ...state.schedule, onPlaceHolder: true }
      };

    case "DRAG_ENTER_DND_CONTEXT":
      var schedule;
      if (action.payload.closest(".AsanaGrid") == null) {
        schedule = {
          ...state.schedule,
          dragOver: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else {
        schedule = { ...state.schedule };
      }

      return {
        ...state,
        schedule: schedule
      };

    case "END_DRAG":
      var { dragOver, dragging, dragSource } = state.schedule;
      var newNextCardKey = state.schedule.nextCardKey;
      if (dragSource === "SCHEDULE") {
        var dragCard = state.schedule.cards[dragging];
        var cardsBegin = state.schedule.cards.slice(0, dragging);
        var cardsEnd = state.schedule.cards.slice(dragging + 1);
        var cards = [...cardsBegin, ...cardsEnd];
      } else if (dragSource === "ASANAS") {
        dragCard = {
          cardKey: newNextCardKey,
          asanaIndex: dragging
        };
        newNextCardKey += 1;
        cards = [...state.schedule.cards];
      }

      if (dragOver !== null) {
        if (dragOver > dragging && dragSource === "SCHEDULE") {
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
          fastTransition: true,
          nextCardKey: newNextCardKey
        }
      };

    default:
      return state;
  }
}
