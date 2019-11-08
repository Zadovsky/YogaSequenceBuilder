export const DRAG_ENTER_EMPTY_SPACE = "DRAG_ENTER_EMPTY_SPACE";

export function onDragEnterEmptySpace(gridId) {
  return {
    type: DRAG_ENTER_EMPTY_SPACE,
    payload: gridId
  };
}
