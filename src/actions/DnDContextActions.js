export const END_DRAG = "END_DRAG";
export const DRAG_ENTER_DND_CONTEXT = "DRAG_ENTER_DND_CONTEXT";

export function endDrag(e) {
  return {
    type: END_DRAG
  };
}

export function dragEnter(e) {
  return {
    type: DRAG_ENTER_DND_CONTEXT,
    payload: e.target.closest(".AsanasGrid") === null
  };
}
