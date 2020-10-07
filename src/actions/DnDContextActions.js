export const END_DRAG_CARD = "END_DRAG_CARD";
export const END_DRAG_GRID = "END_DRAG_GRID";
export const DRAG_ENTER_DND_CONTEXT_CARD = "DRAG_ENTER_DND_CONTEXT_CARD";
export const DRAG_ENTER_DND_CONTEXT_GRID = "DRAG_ENTER_DND_CONTEXT_GRID";

export function endDragCard() {
  return {
    type: END_DRAG_CARD,
  };
}

export function endDragGrid() {
  return {
    type: END_DRAG_GRID,
  };
}

export function dragEnterCard(e) {
  const outOfAsanasGrid = e.target.closest(".AsanasGrid") === null;
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
