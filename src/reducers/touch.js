import {
  TOUCH_START,
  TOUCH_MOVE_DND,
  TOUCH_MOVE_SCROLL,
  TOUCH_END,
  TOUCH_TIMEOUT_END,
} from "../actions/AsanaCardActions";

import { TOUCH_SCROLL_DONE } from "../actions/PanelFlexElementActions";

const initialState = {
  x: null,
  y: null,
  dX: 0,
  dY: 0,
  touchMode: false,
  touchDnd: null,
  startCard: null,
  startGrid: null,
  startPanelIsSchedule: null,
};

export function touchReducer(state = initialState, action) {
  switch (action.type) {
    case TOUCH_MOVE_DND:
      return {
        ...state,
      };

    case TOUCH_MOVE_SCROLL:
      return {
        ...state,
        touchDnd: state.touchDnd === null ? false : state.touchDnd,
        x: action.payload.x,
        y: action.payload.y,
        dX: state.x - action.payload.x,
        dY: state.y - action.payload.y,
      };

    case TOUCH_SCROLL_DONE:
      return {
        ...state,
        dX: 0,
        dY: 0,
      };

    case TOUCH_TIMEOUT_END:
      if (state.touchMode && state.touchDnd === null) {
        return {
          ...state,
          touchDnd: true,
        };
      } else return state;

    case TOUCH_START:
      return {
        ...state,
        touchMode: true,
        startGrid: action.payload.gridId,
        startCard: action.payload.card,
        startPanelIsSchedule: action.payload.schedule,
        x: action.payload.x,
        y: action.payload.y,
        dX: 0,
        dY: 0,
      };

    case TOUCH_END:
      return {
        ...state,
        touchMode: false,
        touchDnd: null,
        startGrid: null,
        startCard: null,
        startPanelIsSchedule: null,
        x: null,
        y: null,
        dX: 0,
        dY: 0,
      };

    default:
      return state;
  }
}
