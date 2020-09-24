import {
  TOUCH_START,
  TOUCH_MOVE_DND,
  TOUCH_MOVE_SCROLL,
  TOUCH_END,
  TOUCH_TIMEOUT_END,
} from "../actions/AsanaCardActions";

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
};

export function touchReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case TOUCH_MOVE_DND:
      return {
        ...state,
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
