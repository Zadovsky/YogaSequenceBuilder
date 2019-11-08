export const START_DRAG = "START_DRAG";
export const END_DRAG = "END_DRAG";
export const DRAG_ENTER_DND_CONTEXT = "DRAG_ENTER_DND_CONTEXT";

export function startDrag(e) {
  var gridId = e.target.attributes.gridid.value;
  if (gridId !== "ASANAS") gridId = +gridId;

  const cardPlace = +e.target.attributes.cardplace.value;

  return {
    type: START_DRAG,
    payload: {
      card: cardPlace,
      source: gridId
    }
  };
}

export function endDrag(e) {
  return {
    type: END_DRAG
  };
}

export function dragEnter(e) {
  return {
    type: DRAG_ENTER_DND_CONTEXT,
    payload: e.target.closest(".AsanaGrid") === null
  };
}
