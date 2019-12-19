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
  DRAG_ENTER_GRID,
  CLOSE_GRID
} from "../actions/AsanasGridActions";

const initialState = {
  cards: [{ gridCards: [], gridKey: 0 }],
  nextCardKey: 0,
  nextGridKey: 1,
  dragSourceGrid: null,
  draggingCard: null,
  draggingGrid: null,
  dragOverCard: null,
  dragOverGrid: null,
  lastDragEnterCard: null,
  lastDragEnterGrid: null,
  fastTransition: false,
  onPlaceHolder: false,
  gridHeight: null
};

function addEmptyGrid(cards, nextGridKey) {
  var newGridKey = nextGridKey;
  if (cards.length === 0 || cards[cards.length - 1].gridCards.length !== 0) {
    cards.push({ gridCards: [], gridKey: newGridKey });
    newGridKey += 1;
  }

  return { cards: cards, nextGridKey: newGridKey };
}

export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case DRAG_ICON_MOUSE_DOWN:
      return {
        ...state,
        draggingGrid: true
      };

    case DRAG_ICON_MOUSE_UP:
      return {
        ...state,
        draggingGrid: null
      };

    case START_DRAG_GRID:
      if (state.draggingGrid) {
        return {
          ...state,
          fastTransition: true,
          onPlaceHolder: true,
          gridHeight: action.payload.height,
          draggingGrid: action.payload.gridId,
          dragOverGrid: action.payload.gridId + 1
        };
      } else if (state.draggingCard !== null) {
        return state;
      } else {
        action.payload.e.preventDefault();
        return state;
      }

    case DRAG_ENTER_GRID:
      if (
        action.payload !== state.lastDragEnterGrid &&
        state.draggingGrid !== null
      ) {
        let newDragOverGrid;

        if (state.onPlaceHolder && state.dragOverGrid === action.payload) {
          if (action.payload + 1 === state.draggingGrid) {
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
          dragOverGrid: newDragOverGrid,
          lastDragEnterGrid: action.payload
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
        lastDragEnterGrid: null
      };

    case CLOSE_GRID:
      var cards = JSON.parse(JSON.stringify(state.cards));
      cards.splice(action.payload, 1);

      return {
        ...state,
        cards: cards
      };

    case ADD_ASANA:
      if (!action.payload.ItIsSchedulePanel) {
        cards = JSON.parse(JSON.stringify(state.cards));
        const gridToAdd = cards.length === 1 ? 0 : cards.length - 2;
        cards[gridToAdd].gridCards.push({
          cardKey: state.nextCardKey,
          asanaIndex: action.payload.asanaId
        });

        let newCardsGridKey = addEmptyGrid(cards, state.nextGridKey);

        return {
          ...state,
          cards: newCardsGridKey.cards,
          nextCardKey: state.nextCardKey + 1,
          nextGridKey: newCardsGridKey.nextGridKey
        };
      } else {
        return {
          ...state
        };
      }

    case CLOSE_CARD:
      cards = JSON.parse(JSON.stringify(state.cards));
      cards[action.payload.gridId].gridCards.splice(
        action.payload.cardIndex,
        1
      );

      return {
        ...state,
        cards: cards
      };

    case START_DRAG_CARD:
      if (action.payload.source === "ASANAS") {
        return {
          ...state,
          dragSourceGrid: action.payload.source,
          draggingCard: action.payload.card,
          dragOverCard: null,
          dragOverGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else {
        return {
          ...state,
          dragSourceGrid: action.payload.source,
          draggingCard: action.payload.card,
          dragOverCard: action.payload.card + 1,
          dragOverGrid: action.payload.source,
          fastTransition: true,
          onPlaceHolder: true
        };
      }

    case DRAG_ENTER_CARD:
      if (
        state.draggingGrid === null &&
        action.payload.gridId !== "ASANAS" &&
        !(
          action.payload.cardPlace === state.lastDragEnterCard &&
          action.payload.gridId === state.lastDragEnterGrid
        )
      ) {
        let newDragOverCard = action.payload.cardPlace;

        if (
          (state.dragOverGrid === action.payload.gridId &&
            state.dragOverCard === newDragOverCard &&
            state.onPlaceHolder) ||
          (state.dragSourceGrid === action.payload.gridId &&
            state.dragOverCard < newDragOverCard - 1 &&
            state.dragOverCard != null)
        ) {
          newDragOverCard += 1;
        }

        return {
          ...state,
          dragOverCard: newDragOverCard,
          dragOverGrid: action.payload.gridId,
          lastDragEnterCard: action.payload.cardPlace,
          lastDragEnterGrid: action.payload.gridId,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else {
        return {
          ...state
        };
      }

    case DRAG_ENTER_EMPTY_SPACE:
      if (state.draggingGrid === null && action.payload !== "ASANAS") {
        return {
          ...state,
          dragOverCard: state.cards[action.payload].gridCards.length,
          dragOverGrid: action.payload,
          lastDragEnterCard: null,
          lastDragEnterGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else {
        return {
          ...state
        };
      }

    case DRAG_ENTER_PLACEHOLDER:
      return {
        ...state,
        lastDragEnterCard: null,
        lastDragEnterGrid: null,
        onPlaceHolder: true
      };

    case DRAG_ENTER_DND_CONTEXT:
      if (action.payload.outOfAsanasGrid && state.draggingGrid === null) {
        return {
          ...state,
          dragOverCard: null,
          dragOverGrid: null,
          lastDragEnterCard: null,
          lastDragEnterGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      } else if (action.payload.outOfPanel && state.draggingGrid !== null) {
        return {
          ...state,
          fastTransition: false,
          onPlaceHolder: false,
          dragOverGrid: null,
          lastDragEnterGrid: null
        };
      } else {
        return state;
      }

    case END_DRAG:
      cards = JSON.parse(JSON.stringify(state.cards));

      if (state.draggingGrid === null) {
        var {
          dragOverCard,
          dragOverGrid,
          draggingCard,
          dragSourceGrid
        } = state;
        var newNextCardKey = state.nextCardKey;
        if (dragSourceGrid === "ASANAS") {
          var dragCard = {
            cardKey: newNextCardKey,
            asanaIndex: draggingCard
          };
          newNextCardKey += 1;
        } else {
          dragCard = cards[dragSourceGrid].gridCards[draggingCard];
          cards[dragSourceGrid].gridCards.splice(draggingCard, 1);
        }

        if (dragOverCard !== null) {
          if (dragOverCard > draggingCard && dragSourceGrid === dragOverGrid) {
            dragOverCard -= 1;
          }
          cards[dragOverGrid].gridCards = [
            ...cards[dragOverGrid].gridCards.slice(0, dragOverCard),
            dragCard,
            ...cards[dragOverGrid].gridCards.slice(dragOverCard)
          ];
        }

        var newCardsGridKey = addEmptyGrid(cards, state.nextGridKey);

        return {
          ...state,
          cards: newCardsGridKey.cards,
          nextGridKey: newCardsGridKey.nextGridKey,
          dragOverCard: null,
          dragOverGrid: null,
          draggingCard: null,
          lastDragEnterCard: null,
          lastDragEnterGrid: null,
          fastTransition: true,
          nextCardKey: newNextCardKey
        };
      } else {
        var draggingGrid = state.draggingGrid;
        var dragGrid = cards[draggingGrid];
        dragOverGrid = state.dragOverGrid;

        cards.splice(draggingGrid, 1);

        if (dragOverGrid > draggingGrid) {
          dragOverGrid--;
        }

        if (dragOverGrid !== null) {
          cards = [
            ...cards.slice(0, dragOverGrid),
            dragGrid,
            ...cards.slice(dragOverGrid)
          ];
        }

        newCardsGridKey = addEmptyGrid(cards, state.nextGridKey);

        return {
          ...state,
          cards: newCardsGridKey.cards,
          nextGridKey: newCardsGridKey.nextGridKey,
          fastTransition: true,
          gridHeight: null,
          draggingGrid: null,
          dragOverGrid: null,
          lastDragEnterGrid: null
        };
      }

    default:
      return state;
  }
}
