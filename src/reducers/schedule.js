import {
  ADD_ASANA,
  DRAG_ENTER_CARD,
  START_DRAG
} from "../actions/AsanaCardActions";
import { DRAG_ENTER_EMPTY_SPACE } from "../actions/EmptySpaceAtTheEndActions";
import { DRAG_ENTER_PLACEHOLDER } from "../actions/PlaceHolderActions";
import { END_DRAG, DRAG_ENTER_DND_CONTEXT } from "../actions/DnDContextActions";

const initialState = {
  cards: [[]],
  nextCardKey: 0,
  dragSource: null,
  dragging: null,
  dragOver: null,
  dragOverGrid: null,
  lastDragEnterCard: null,
  lastDragEnterCardGrid: null,
  fastTransition: false,
  onPlaceHolder: false
};

function checkCards(cards) {
  var newCards = cards.filter(card => {
    return card.length > 0;
  });
  newCards.push([]);
  return newCards;
}

export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ASANA:
      var newState = {};
      if (action.payload.gridId === "ASANAS") {
        const gridToAdd = state.cards.length === 1 ? 0 : state.cards.length - 2;
        let cards = [...state.cards];
        cards[gridToAdd].push({
          cardKey: state.nextCardKey,
          asanaIndex: action.payload.asanaId
        });

        cards = checkCards(cards);

        newState = {
          cards: cards,
          nextCardKey: state.nextCardKey + 1
        };
      }

      return {
        ...state,
        ...newState
      };

    case START_DRAG:
      if (action.payload.source === "ASANAS") {
        newState = {
          dragOver: null,
          dragOverGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else {
        newState = {
          dragOver: action.payload.card + 1,
          dragOverGrid: action.payload.source,
          fastTransition: true,
          onPlaceHolder: true
        };
      }

      return {
        ...state,
        ...newState,
        dragSource: action.payload.source,
        dragging: action.payload.card
      };

    case DRAG_ENTER_CARD:
      newState = {};

      if (
        action.payload.gridId !== "ASANAS" &&
        !(
          action.payload.card === state.lastDragEnterCard &&
          action.payload.gridId === state.lastDragEnterCardGrid
        )
      ) {
        let newDragOver = action.payload.cardPlace;
        if (
          (state.dragOver === newDragOver && state.onPlaceHolder) ||
          (state.dragSource === action.payload.gridId &&
            state.dragOver < newDragOver - 1 &&
            state.dragOver != null)
        ) {
          newDragOver += 1;
        }

        newState = {
          dragOver: newDragOver,
          dragOverGrid: action.payload.gridId,
          lastDragEnterCard: action.payload.card,
          lastDragEnterCardGrid: action.payload.gridId,
          fastTransition: false,
          onPlaceHolder: false
        };
      }

      return {
        ...state,
        ...newState
      };

    case DRAG_ENTER_EMPTY_SPACE:
      newState = {};
      if (action.payload !== "ASANAS") {
        newState = {
          dragOver: state.cards[action.payload].length,
          dragOverGrid: action.payload,
          lastDragEnterCard: null,
          lastDragEnterCardGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      }
      return {
        ...state,
        ...newState
      };

    case DRAG_ENTER_PLACEHOLDER:
      return {
        ...state,
        lastDragEnterCard: null,
        lastDragEnterCardGrid: null,
        onPlaceHolder: true
      };

    case DRAG_ENTER_DND_CONTEXT:
      if (action.payload) {
        newState = {
          ...state,
          dragOver: null,
          dragOverGrid: null,
          lastDragEnterCard: null,
          lastDragEnterCardGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else {
        newState = { ...state };
      }

      return {
        ...newState
      };

    case END_DRAG:
      var { dragOver, dragOverGrid, dragging, dragSource } = state;
      var newNextCardKey = state.nextCardKey;
      var cards = [...state.cards];
      if (dragSource === "ASANAS") {
        var dragCard = {
          cardKey: newNextCardKey,
          asanaIndex: dragging
        };
        newNextCardKey += 1;
      } else {
        dragCard = state.cards[dragSource][dragging];
        var cardsBegin = state.cards[dragSource].slice(0, dragging);
        var cardsEnd = state.cards[dragSource].slice(dragging + 1);
        cards[dragSource] = [...cardsBegin, ...cardsEnd];
      }

      if (dragOver !== null) {
        if (dragOver > dragging && dragSource === dragOverGrid) {
          dragOver -= 1;
        }
        cardsBegin = cards[dragOverGrid].slice(0, dragOver);
        cardsEnd = cards[dragOverGrid].slice(dragOver);
        cards[dragOverGrid] = [...cardsBegin, dragCard, ...cardsEnd];
      }

      cards = checkCards(cards);

      return {
        ...state,
        cards: cards,
        dragOver: null,
        dragOverGrid: null,
        dragging: null,
        lastDragEnterCard: null,
        lastDragEnterCardGrid: null,
        fastTransition: true,
        nextCardKey: newNextCardKey
      };

    default:
      return state;
  }
}
