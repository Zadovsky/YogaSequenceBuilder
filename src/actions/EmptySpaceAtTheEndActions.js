export const DRAG_ENTER_EMPTY_SPACE = "DRAG_ENTER_EMPTY_SPACE";

export function onDragEnterEmptySpace(gridId, ItIsSchedulePanel) {
  return {
    type: DRAG_ENTER_EMPTY_SPACE,
    payload: { gridId: gridId, ItIsSchedulePanel: ItIsSchedulePanel }
  };
}
