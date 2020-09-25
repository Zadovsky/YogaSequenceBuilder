import {
  TOUCH_START,
  TOUCH_MOVE_DND,
  TOUCH_MOVE_SCROLL,
  TOUCH_END,
  TOUCH_TIMEOUT_END,
} from "../actions/AsanaCardActions";

import { MOUNT_GHOST_BLOCK } from "../actions/GhostBlockActions";

const initialState = {
  touchMode: false,
  touchDnd: null,
  startCard: null,
  startGrid: null,
  startPanelIsSchedule: null,
  target: null,
  targetTop: 0,
  targetLeft: 0,
  targetWidth: 0,
  targetHeight: 0,
  startX: 0,
  startY: 0,
  moveX: 0,
  moveY: 0,
  moveOnEl: null,
  ghostBlock: null,
};

export function touchReducer(state = initialState, action) {
  // console.log(action.type);
  switch (action.type) {
    case MOUNT_GHOST_BLOCK:
      return {
        ...state,
        ghostBlock: action.payload,
      };

    case TOUCH_MOVE_DND:
      return {
        ...state,
        moveX: action.payload.x,
        moveY: action.payload.y,
        moveOnEl: action.payload.e,
      };

    case TOUCH_MOVE_SCROLL:
      return {
        ...state,
        touchDnd: state.touchDnd === null ? false : state.touchDnd,
      };

    case TOUCH_TIMEOUT_END:
      if (state.touchMode && state.touchDnd === null) {
        return {
          ...state,
          touchDnd: true,
          startGrid: action.payload.gridId,
          startCard: action.payload.card,
          startPanelIsSchedule: action.payload.schedule,
        };
      } else return state;

    case TOUCH_START:
      return {
        ...state,
        touchMode: true,
        target: action.payload.target,
        targetTop: action.payload.top,
        targetLeft: action.payload.left,
        targetWidth: action.payload.width,
        targetHeight: action.payload.height,
        startX: action.payload.x,
        startY: action.payload.y,
        moveX: action.payload.x,
        moveY: action.payload.y,
      };

    case TOUCH_END:
      return {
        ...state,
        touchMode: false,
        touchDnd: null,
      };

    default:
      return state;
  }
}
