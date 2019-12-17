import {
  ADD_ASANA,
  DRAG_ENTER_CARD,
  START_DRAG_CARD,
  CLOSE_CARD
} from "../actions/AsanaCardActions";
import { DRAG_ENTER_EMPTY_SPACE } from "../actions/EmptySpaceAtTheEndActions";
import { DRAG_ENTER_PLACEHOLDER } from "../actions/PlaceHolderActions";
import { END_DRAG, DRAG_ENTER_DND_CONTEXT } from "../actions/DnDContextActions";
import { DRAG_ENTER_GRID_PH } from "../actions/GridPlaceHolderActions";
import {
  DRAG_ICON_MOUSE_DOWN,
  DRAG_ICON_MOUSE_UP,
  START_DRAG_GRID,
  DRAG_ENTER_GRID
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
    draggingGrid: null,
    gridHeight: null,
    dragGridOverGrid: null,
    lastDragEnterGrid: null
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
          draggingGrid: true
        }
      };

    case DRAG_ICON_MOUSE_UP:
      return {
        ...state,
        dndGridFlags: {
          ...state.dndGridFlags,
          draggingGrid: null
        }
      };

    case START_DRAG_GRID:
      if (state.dndGridFlags.draggingGrid) {
        return {
          ...state,
          fastTransition: true,
          onPlaceHolder: true,
          dndGridFlags: {
            ...state.dndGridFlags,
            draggingGrid: action.payload.gridId,
            gridHeight: action.payload.height,
            dragGridOverGrid: action.payload.gridId + 1
          }
        };
      } else if (state.dragging !== null) {
        return { ...state };
      } else {
        action.payload.e.preventDefault();
        return { ...state };
      }

    case DRAG_ENTER_GRID:
      if (action.payload !== state.dndGridFlags.lastDragEnterGrid) {
        let newDragOverGrid;

        if (
          state.onPlaceHolder &&
          state.dndGridFlags.dragGridOverGrid === action.payload
        ) {
          if (action.payload + 1 === state.dndGridFlags.draggingGrid) {
            newDragOverGrid = action.payload + 2;
          } else {
            newDragOverGrid = action.payload + 1;
          }
        } else {
          newDragOverGrid = action.payload;
        }

        return {
          ...state,
          fastTransition: false,
          onPlaceHolder: false,
          dndGridFlags: {
            ...state.dndGridFlags,
            dragGridOverGrid: newDragOverGrid,
            lastDragEnterGrid: action.payload
          }
        };
      } else {
        return {
          ...state
        };
      }

    case DRAG_ENTER_GRID_PH:
      return {
        ...state,
        onPlaceHolder: true,
        fastTransition: false,
        dndGridFlags: {
          ...state.dndGridFlags,
          lastDragEnterGrid: null
        }
      };

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
      if (
        action.payload.outOfAsanasGrid &&
        state.dndGridFlags.draggingGrid === null
      ) {
        newState = {
          ...state,
          dragOver: null,
          dragOverGrid: null,
          lastDragEnterCard: null,
          lastDragEnterCardGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else if (
        action.payload.outOfPanel &&
        state.dndGridFlags.draggingGrid !== null
      ) {
        newState = {
          ...state,
          fastTransition: false,
          onPlaceHolder: false,
          dndGridFlags: {
            ...state.dndGridFlags,
            dragGridOverGrid: null,
            lastDragEnterGrid: null
          }
        };
      } else {
        newState = { ...state };
      }

      return {
        ...newState
      };

    case END_DRAG:
      cards = JSON.parse(JSON.stringify(state.cards));
      if (state.dndGridFlags.draggingGrid === null) {
        var { dragOver, dragOverGrid, dragging, dragSource } = state;
        var newNextCardKey = state.nextCardKey;
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
        var { draggingGrid, dragGridOverGrid } = state.dndGridFlags;
        var dragGrid = cards[draggingGrid];

        cardsBegin = cards.slice(0, draggingGrid);
        cardsEnd = cards.slice(draggingGrid + 1);
        cards = [...cardsBegin, ...cardsEnd];

        if (dragGridOverGrid > draggingGrid) {
          dragGridOverGrid--;
        }

        cardsBegin = cards.slice(0, dragGridOverGrid);
        cardsEnd = cards.slice(dragGridOverGrid);
        cards = [...cardsBegin, dragGrid, ...cardsEnd];

        return {
          ...state,
          cards: cards,
          fastTransition: true,
          dndGridFlags: {
            ...state.dndGridFlags,
            draggingGrid: null,
            gridHeight: null,
            dragGridOverGrid: null,
            lastDragEnterGrid: null
          }
        };
      }

    default:
      return state;
  }
}
