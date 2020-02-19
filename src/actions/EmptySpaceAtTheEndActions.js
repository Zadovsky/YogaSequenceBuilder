export const DRAG_ENTER_EMPTY_SPACE = "DRAG_ENTER_EMPTY_SPACE";

export function onDragEnterEmptySpaceAction(gridId, itIsSchedulePanel) {
  return {
    type: DRAG_ENTER_EMPTY_SPACE,
    payload: { gridId: gridId, itIsSchedulePanel: itIsSchedulePanel }
  };
}
