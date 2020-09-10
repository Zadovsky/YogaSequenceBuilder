export const END_DRAG = "END_DRAG";
export const DRAG_ENTER_DND_CONTEXT_CARD = "DRAG_ENTER_DND_CONTEXT_CARD";
export const DRAG_ENTER_DND_CONTEXT_GRID = "DRAG_ENTER_DND_CONTEXT_GRID";

export function endDrag(e) {
  return {
    type: END_DRAG,
  };
}

export function dragEnterCard(e) {
  const outOfAsanasGrid = e.target.closest(".AsanasGridDraggable") === null;
  const outOfPanel = e.target.closest(".SchedulePanel") === null;
  if (outOfAsanasGrid || outOfPanel) {
    return {
      type: DRAG_ENTER_DND_CONTEXT_CARD,
    };
  } else {
    return { type: null };
  }
}

export function dragEnterGrid(e) {
  const outOfPanel = e.target.closest(".SchedulePanel") === null;
  if (outOfPanel) {
    return {
      type: DRAG_ENTER_DND_CONTEXT_GRID,
    };
  } else {
    return { type: null };
  }
}
