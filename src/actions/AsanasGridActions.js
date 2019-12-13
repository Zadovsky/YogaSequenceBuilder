export const START_DRAG_GRID = "START_DRAG_GRID";
export const DRAG_ICON_MOUSE_DOWN = "DRAG_ICON_MOUSE_DOWN";
export const DRAG_ICON_MOUSE_UP = "DRAG_ICON_MOUSE_UP";
export const DRAG_ENTER_GRID = "DRAG_ENTER_GRID";

export function startGridDragAction(gridId, e) {
  return {
    type: START_DRAG_GRID,
    payload: { gridId: gridId, e: e, height: e.target.clientHeight }
  };
}

export function onDragIconMouseDownAction() {
  return {
    type: DRAG_ICON_MOUSE_DOWN
  };
}

export function onDragIconMouseUpAction() {
  return {
    type: DRAG_ICON_MOUSE_UP
  };
}

export function dragEnterGridAction(gridId) {
  return {
    type: DRAG_ENTER_GRID,
    payload: gridId
  };
}
