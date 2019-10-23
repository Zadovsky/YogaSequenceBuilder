export function onDragLeaveGrid(e) {
  if (e.target.className === "AsanaGrid") {
    return {
      type: "DRAG_LEAVE_GRID"
    };
  } else
    return {
      type: ""
    };
}
