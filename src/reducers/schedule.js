import {
  ADD_ASANA_ASANAS,
  ADD_ASANA_SCHEDULE,
  DRAG_ENTER_CARD_ASANAS,
  DRAG_ENTER_CARD_SCHEDULE
} from "../actions/AsanaCardActions";

import {
  START_DRAG_ASANAS,
  START_DRAG_SCHEDULE,
  END_DRAG,
  DRAG_ENTER_DND_CONTEXT
} from "../actions/DnDContextActions";

import {
  DRAG_ENTER_EMPTY_SPACE_ASANAS,
  DRAG_ENTER_EMPTY_SPACE_SCHEDULE
} from "../actions/EmptySpaceAtTheEndActions";

import { DRAG_ENTER_PLACEHOLDER } from "../actions/PlaceHolderActions";

const initialState = {
  cards: [],
  nextCardKey: 0,
  dragSource: null,
  dragging: null,
  dragOver: null,
  fastTransition: false,
  onPlaceHolder: false
};

export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ASANA_ASANAS:
      return {
        ...state,
        cards: [
          ...state.cards,
          { cardKey: state.nextCardKey, asanaIndex: action.payload }
        ],
        nextCardKey: state.nextCardKey + 1
      };

    case ADD_ASANA_SCHEDULE:
      return {
        ...state
      };

    case START_DRAG_ASANAS:
      return {
        ...state,
        dragSource: action.payload.source,
        dragging: action.payload.card,
        dragOver: null,
        fastTransition: false,
        onPlaceHolder: false
      };

    case START_DRAG_SCHEDULE:
      return {
        ...state,
        dragSource: action.payload.source,
        dragging: action.payload.card,
        dragOver: action.payload.card + 1,
        fastTransition: true,
        onPlaceHolder: true
      };

    case DRAG_ENTER_CARD_ASANAS:
      return {
        ...state
      };

    case DRAG_ENTER_CARD_SCHEDULE:
      var newDragOver = action.payload;
      if (
        (state.dragOver === newDragOver && state.onPlaceHolder) ||
        (state.dragOver < newDragOver - 1 && state.dragOver != null)
      ) {
        newDragOver += 1;
      }

      return {
        ...state,
        dragOver: newDragOver,
        fastTransition: false,
        onPlaceHolder: false
      };

    case DRAG_ENTER_EMPTY_SPACE_SCHEDULE:
      return {
        ...state,
        dragOver: state.cards.length,
        fastTransition: false,
        onPlaceHolder: false
      };

    case DRAG_ENTER_EMPTY_SPACE_ASANAS:
      return {
        ...state
      };

    case DRAG_ENTER_PLACEHOLDER:
      return {
        ...state,
        onPlaceHolder: true
      };

    case DRAG_ENTER_DND_CONTEXT:
      var schedule;
      if (action.payload.closest(".AsanaGrid") == null) {
        schedule = {
          ...state,
          dragOver: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else {
        schedule = { ...state };
      }

      return {
        ...schedule
      };

    case END_DRAG:
      var { dragOver, dragging, dragSource } = state;
      var newNextCardKey = state.nextCardKey;
      if (dragSource === "SCHEDULE") {
        var dragCard = state.cards[dragging];
        var cardsBegin = state.cards.slice(0, dragging);
        var cardsEnd = state.cards.slice(dragging + 1);
        var cards = [...cardsBegin, ...cardsEnd];
      } else if (dragSource === "ASANAS") {
        dragCard = {
          cardKey: newNextCardKey,
          asanaIndex: dragging
        };
        newNextCardKey += 1;
        cards = [...state.cards];
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
        cards: cards,
        dragOver: null,
        dragging: null,
        fastTransition: true,
        nextCardKey: newNextCardKey
      };

    default:
      return state;
  }
}
