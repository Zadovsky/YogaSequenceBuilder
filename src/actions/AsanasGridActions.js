export const START_DRAG_GRID = "START_DRAG_GRID";
export const DRAG_ICON_MOUSE_DOWN = "DRAG_ICON_MOUSE_DOWN";
export const DRAG_ICON_MOUSE_UP = "DRAG_ICON_MOUSE_UP";

export function startGridDragAction(gridId, e) {
  return {
    type: START_DRAG_GRID,
    payload: { gridId: gridId, e: e }
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
