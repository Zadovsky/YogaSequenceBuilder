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
import { CHANGE_PANEL_NAME } from "../actions/PanelNameActions";
import { CLICK_SAVE } from "../actions/SaveLoadPdfButtonsActions";
import {
  DRAG_ICON_MOUSE_DOWN,
  DRAG_ICON_MOUSE_UP,
  START_DRAG_GRID,
  DRAG_ENTER_GRID,
  CLOSE_GRID,
  CHANGE_GRID_NAME
} from "../actions/AsanasGridActions";

const initialState = {
  panelDefaultName: { ru: "Ваш комплекс", en: "Your sequence" },
  panelName: "",
  isPanelNameDef: true,
  cards: [{ gridCards: [], gridKey: 0, gridName: "", defaultName: true }],
  gridDefaultName: {
    ru: "Без названия",
    en: "noname"
  },
  nextCardKey: 0,
  nextGridKey: 1,
  dragSourceGrid: null,
  dragSourcePanelIsSchedule: null,
  draggingCard: null,
  draggingGrid: null,
  dragOverCard: null,
  dragOverGrid: null,
  lastDragEnterCard: null,
  lastDragEnterGrid: null,
  fastTransition: false,
  onPlaceHolder: false,
  gridHeight: null,
  saveLoadPdfText: {
    ru: {
      save: "Сохранить",
      load: "Загрузить",
      pdf: "в PDF"
    },
    en: {
      save: "Save",
      load: "Load",
      pdf: "to PDF"
    }
  }
};

function addEmptyGrid(cards, nextGridKey) {
  var newGridKey = nextGridKey;
  if (cards.length === 0 || cards[cards.length - 1].gridCards.length !== 0) {
    cards.push({
      gridCards: [],
      gridKey: newGridKey,
      gridName: "",
      defaultName: true
    });
    newGridKey++;
  }

  return { cards: cards, nextGridKey: newGridKey };
}

export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_SAVE:
      console.log(action.payload);
      return state;

    case CHANGE_PANEL_NAME:
      return {
        ...state,
        panelName: action.payload,
        isPanelNameDef: false
      };

    case CHANGE_GRID_NAME:
      var cards = JSON.parse(JSON.stringify(state.cards));
      cards[action.payload.gridId].gridName = action.payload.value;
      cards[action.payload.gridId].defaultName = false;
      return {
        ...state,
        cards: cards
      };

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
      if (state.draggingGrid === true) {
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
      if (action.payload !== state.lastDragEnterGrid) {
        if (state.draggingGrid !== null) {
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
        } else if (state.draggingCard !== null) {
          return {
            ...state,
            dragOverGrid: action.payload,
            dragOverCard: state.cards[action.payload].gridCards.length,
            lastDragEnterGrid: action.payload
          };
        } else {
          return state;
        }
      } else {
        return state;
      }

    case DRAG_ENTER_GRID_PH:
      return {
        ...state,
        onPlaceHolder: true,
        fastTransition: false,
        lastDragEnterGrid: null
      };

    case CLOSE_GRID:
      cards = JSON.parse(JSON.stringify(state.cards));
      cards.splice(action.payload, 1);

      return {
        ...state,
        cards: cards
      };

    case ADD_ASANA:
      if (!action.payload.itIsSchedulePanel) {
        cards = JSON.parse(JSON.stringify(state.cards));
        const gridToAdd = cards.length === 1 ? 0 : cards.length - 2;
        cards[gridToAdd].gridCards.push({
          cardKey: state.nextCardKey,
          asanaIndex: action.payload.asanaId
        });

        let cardsWithEmptyGrid = addEmptyGrid(cards, state.nextGridKey);

        return {
          ...state,
          cards: cardsWithEmptyGrid.cards,
          nextCardKey: state.nextCardKey + 1,
          nextGridKey: cardsWithEmptyGrid.nextGridKey
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
      if (action.payload.itIsSchedulePanel) {
        return {
          ...state,
          dragSourceGrid: action.payload.gridId,
          dragSourcePanelIsSchedule: action.payload.itIsSchedulePanel,
          draggingCard: action.payload.card,
          dragOverCard: action.payload.card + 1,
          dragOverGrid: action.payload.gridId,
          fastTransition: true,
          onPlaceHolder: true
        };
      } else {
        return {
          ...state,
          dragSourceGrid: action.payload.gridId,
          dragSourcePanelIsSchedule: action.payload.itIsSchedulePanel,
          draggingCard: action.payload.card,
          dragOverCard: null,
          dragOverGrid: null,
          fastTransition: false,
          onPlaceHolder: false
        };
      }

    case DRAG_ENTER_CARD:
      if (
        state.draggingCard !== null &&
        action.payload.itIsSchedulePanel &&
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
          newDragOverCard++;
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
      if (state.draggingCard !== null && action.payload.itIsSchedulePanel) {
        return {
          ...state,
          dragOverCard: state.cards[action.payload.gridId].gridCards.length,
          dragOverGrid: action.payload.gridId,
          lastDragEnterCard: null,
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
        onPlaceHolder: true
      };

    case DRAG_ENTER_DND_CONTEXT:
      if (
        (action.payload.outOfAsanasGrid || action.payload.outOfPanel) &&
        state.draggingCard !== null
      ) {
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

      if (state.draggingCard !== null) {
        var {
          dragOverCard,
          dragOverGrid,
          draggingCard,
          dragSourceGrid,
          dragSourcePanelIsSchedule
        } = state;

        var newNextCardKey = state.nextCardKey;

        if (dragSourcePanelIsSchedule) {
          var dragCard = cards[dragSourceGrid].gridCards[draggingCard];
          cards[dragSourceGrid].gridCards.splice(draggingCard, 1);
        } else {
          dragCard = {
            cardKey: newNextCardKey,
            asanaIndex: draggingCard
          };
          newNextCardKey++;
        }

        if (dragOverCard !== null) {
          if (dragOverCard > draggingCard && dragSourceGrid === dragOverGrid) {
            dragOverCard--;
          }
          cards[dragOverGrid].gridCards = [
            ...cards[dragOverGrid].gridCards.slice(0, dragOverCard),
            dragCard,
            ...cards[dragOverGrid].gridCards.slice(dragOverCard)
          ];
        }

        let cardsWithEmptyGrid = addEmptyGrid(cards, state.nextGridKey);

        return {
          ...state,
          cards: cardsWithEmptyGrid.cards,
          nextGridKey: cardsWithEmptyGrid.nextGridKey,
          dragOverCard: null,
          dragOverGrid: null,
          draggingCard: null,
          lastDragEnterCard: null,
          lastDragEnterGrid: null,
          fastTransition: true,
          nextCardKey: newNextCardKey
        };
      } else if (state.draggingGrid !== null) {
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

        let cardsWithEmptyGrid = addEmptyGrid(cards, state.nextGridKey);

        return {
          ...state,
          cards: cardsWithEmptyGrid.cards,
          nextGridKey: cardsWithEmptyGrid.nextGridKey,
          fastTransition: true,
          gridHeight: null,
          draggingGrid: null,
          dragOverGrid: null,
          lastDragEnterGrid: null
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}
