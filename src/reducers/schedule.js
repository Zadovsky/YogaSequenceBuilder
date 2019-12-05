import {
  ADD_ASANA,
  DRAG_ENTER_CARD,
  START_DRAG_CARD,
  CLOSE_CARD
} from "../actions/AsanaCardActions";
import { DRAG_ENTER_EMPTY_SPACE } from "../actions/EmptySpaceAtTheEndActions";
import { DRAG_ENTER_PLACEHOLDER } from "../actions/PlaceHolderActions";
import { END_DRAG, DRAG_ENTER_DND_CONTEXT } from "../actions/DnDContextActions";
import {
  DRAG_ICON_MOUSE_DOWN,
  DRAG_ICON_MOUSE_UP,
  START_DRAG_GRID
} from "../actions/AsanasGridActions";

const initialState = {
  cards: [{ gridCards: [], gridKey: 0 }],
  nextCardKey: 0,
  nextGridKey: 1,
  dragSource: null,
  dragging: null,
  dragOver: null,
  dragOverGrid: null,
  lastDragEnterCard: null,
  lastDragEnterCardGrid: null,
  fastTransition: false,
  onPlaceHolder: false,
  dndGridFlags: {
    mouseDownTarget: null,
    draggingGrid: null
  }
};

function checkCards(cards, nextGridKey) {
  var newCards = cards.filter((card, i) => {
    if (i < cards.length - 1) {
      return card.gridCards.length > 0;
    } else return true;
  });

  var newGridKey = nextGridKey;
  if (newCards[newCards.length - 1].gridCards.length !== 0) {
    newCards.push({ gridCards: [], gridKey: newGridKey });
    newGridKey += 1;
  }

  return { cards: newCards, nextGridKey: newGridKey };
}

export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case DRAG_ICON_MOUSE_DOWN:
      return {
        ...state,
        dndGridFlags: {
          ...state.dndGridFlags,
          mouseDownTarget: action.payload
        }
      };

    case DRAG_ICON_MOUSE_UP:
      return {
        ...state,
        dndGridFlags: {
          ...state.dndGridFlags,
          mouseDownTarget: null
        }
      };

    case START_DRAG_GRID:
      if (
        action.payload.e.target.contains(state.dndGridFlags.mouseDownTarget)
      ) {
        return {
          ...state,
          dndGridFlags: {
            ...state.dndGridFlags,
            draggingGrid: action.payload.gridId
          }
        };
      } else if (state.dragging !== null) {
        return { ...state };
      } else {
        action.payload.e.preventDefault();
        return { ...state };
      }

    case ADD_ASANA:
      var newState = {};
      if (action.payload.gridId === "ASANAS") {
        let cards = JSON.parse(JSON.stringify(state.cards));
        const gridToAdd = cards.length === 1 ? 0 : cards.length - 2;
        cards[gridToAdd].gridCards.push({
          cardKey: state.nextCardKey,
          asanaIndex: action.payload.asanaId
        });

        let newCardsGridKey = checkCards(cards, state.nextGridKey);

        newState = {
          cards: newCardsGridKey.cards,
          nextCardKey: state.nextCardKey + 1,
          nextGridKey: newCardsGridKey.nextGridKey
        };
      }

      return {
        ...state,
        ...newState
      };

    case CLOSE_CARD:
      var cards = JSON.parse(JSON.stringify(state.cards));
      cards[action.payload.gridId].gridCards.splice(
        action.payload.cardIndex,
        1
      );

      var newCardsGridKey = checkCards(cards, state.nextGridKey);

      return {
        ...state,
        cards: newCardsGridKey.cards,
        nextGridKey: newCardsGridKey.nextGridKey
      };

    case START_DRAG_CARD:
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
          action.payload.cardPlace === state.lastDragEnterCard &&
          action.payload.gridId === state.lastDragEnterCardGrid
        )
      ) {
        let newDragOver = action.payload.cardPlace;
        if (
          (state.dragOverGrid === action.payload.gridId &&
            state.dragOver === newDragOver &&
            state.onPlaceHolder) ||
          (state.dragSource === action.payload.gridId &&
            state.dragOver < newDragOver - 1 &&
            state.dragOver != null)
        ) {
          newDragOver += 1;
        }

        newState = {
          dragOver: newDragOver,
          dragOverGrid: action.payload.gridId,
          lastDragEnterCard: action.payload.cardPlace,
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
          dragOver: state.cards[action.payload].gridCards.length,
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
      if (state.dndGridFlags.draggingGrid === null) {
        var { dragOver, dragOverGrid, dragging, dragSource } = state;
        var newNextCardKey = state.nextCardKey;
        cards = JSON.parse(JSON.stringify(state.cards));
        if (dragSource === "ASANAS") {
          var dragCard = {
            cardKey: newNextCardKey,
            asanaIndex: dragging
          };
          newNextCardKey += 1;
        } else {
          dragCard = cards[dragSource].gridCards[dragging];
          var cardsBegin = cards[dragSource].gridCards.slice(0, dragging);
          var cardsEnd = cards[dragSource].gridCards.slice(dragging + 1);
          cards[dragSource].gridCards = [...cardsBegin, ...cardsEnd];
        }

        if (dragOver !== null) {
          if (dragOver > dragging && dragSource === dragOverGrid) {
            dragOver -= 1;
          }
          cardsBegin = cards[dragOverGrid].gridCards.slice(0, dragOver);
          cardsEnd = cards[dragOverGrid].gridCards.slice(dragOver);
          cards[dragOverGrid].gridCards = [
            ...cardsBegin,
            dragCard,
            ...cardsEnd
          ];
        }

        newCardsGridKey = checkCards(cards, state.nextGridKey);

        return {
          ...state,
          cards: newCardsGridKey.cards,
          nextGridKey: newCardsGridKey.nextGridKey,
          dragOver: null,
          dragOverGrid: null,
          dragging: null,
          lastDragEnterCard: null,
          lastDragEnterCardGrid: null,
          fastTransition: true,
          nextCardKey: newNextCardKey
        };
      } else {
        return {
          ...state,
          dndGridFlags: {
            ...state.dndGridFlags,
            draggingGrid: null,
            mouseDownTarget: null
          }
        };
      }

    default:
      return state;
  }
}
