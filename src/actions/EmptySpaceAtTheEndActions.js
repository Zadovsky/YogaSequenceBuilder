export const DRAG_ENTER_EMPTY_SPACE_ASANAS = "DRAG_ENTER_EMPTY_SPACE_ASANAS";
export const DRAG_ENTER_EMPTY_SPACE_SCHEDULE =
  "DRAG_ENTER_EMPTY_SPACE_SCHEDULE";

export function onDragEnterEmptySpace(gridId) {
  switch (gridId) {
    case "ASANAS":
      return {
        type: DRAG_ENTER_EMPTY_SPACE_ASANAS
      };

    case "SCHEDULE":
      return {
        type: DRAG_ENTER_EMPTY_SPACE_SCHEDULE
      };

    default:
      return {
        type: ""
      };
  }
}
