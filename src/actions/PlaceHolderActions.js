export function onDragEnterHolder(index, gridId) {
  return {
    type: "DRAG_ENTER_PLACEHOLDER",
    payload: index
  };
}

export function onDragLeaveHolder(index, gridId) {
  return {
    type: "DRAG_LEAVE_PLACEHOLDER",
    payload: index
  };
}
