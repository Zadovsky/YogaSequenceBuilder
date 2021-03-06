export const START_DRAG_GRID = "START_DRAG_GRID";
export const DRAG_ICON_MOUSE_DOWN = "DRAG_ICON_MOUSE_DOWN";
export const DRAG_ICON_MOUSE_UP = "DRAG_ICON_MOUSE_UP";
export const DRAG_ENTER_GRID_CARD = "DRAG_ENTER_GRID_CARD";
export const DRAG_ENTER_GRID_GRID = "DRAG_ENTER_GRID_GRID";
export const CLOSE_GRID = "CLOSE_GRID";
export const CHANGE_GRID_NAME = "CHANGE_GRID_NAME";
export const BLUR_GRID_NAME = "BLUR_GRID_NAME";

export function startGridDragAction(gridId, e) {
  return {
    type: START_DRAG_GRID,
    payload: { gridId: gridId, height: e.target.clientHeight },
  };
}

export function onDragIconMouseDownAction() {
  return {
    type: DRAG_ICON_MOUSE_DOWN,
  };
}

export function onDragIconMouseUpAction() {
  return {
    type: DRAG_ICON_MOUSE_UP,
  };
}

export function dragEnterGridCardAction(gridId) {
  return {
    type: DRAG_ENTER_GRID_CARD,
    payload: gridId,
  };
}

export function dragEnterGridGridAction(gridId) {
  return {
    type: DRAG_ENTER_GRID_GRID,
    payload: gridId,
  };
}

export function closeGridAction(gridId) {
  return {
    type: CLOSE_GRID,
    payload: gridId,
  };
}

export function onChangeGridNameAction(gridId, e) {
  return {
    type: CHANGE_GRID_NAME,
    payload: { gridId: gridId, value: e.target.value },
  };
}

export function onBlurGridNameAction() {
  return {
    type: BLUR_GRID_NAME,
  };
}
