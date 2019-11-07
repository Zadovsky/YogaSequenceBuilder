export const DRAG_ENTER_PLACEHOLDER = "DRAG_ENTER_PLACEHOLDER";

export function onDragEnterHolder(index, gridId) {
  return {
    type: DRAG_ENTER_PLACEHOLDER,
    payload: index
  };
}
