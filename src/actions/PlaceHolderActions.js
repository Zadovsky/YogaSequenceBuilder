export function onDragEnterHolder(index, gridId) {
  return {
    type: "DRAG_ENTER_PLACEHOLDER",
    payload: index
  };
}