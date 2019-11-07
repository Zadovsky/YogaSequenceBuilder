export const START_DRAG_ASANAS = "START_DRAG_ASANAS";
export const START_DRAG_SCHEDULE = "START_DRAG_SCHEDULE";
export const END_DRAG = "END_DRAG";
export const DRAG_ENTER_DND_CONTEXT = "DRAG_ENTER_DND_CONTEXT";

export function startDrag(e) {
  const gridId = e.target.attributes.gridid.value;
  const cardPlace = +e.target.attributes.cardplace.value;

  switch (gridId) {
    case "ASANAS":
      return {
        type: START_DRAG_ASANAS,
        payload: {
          card: cardPlace,
          source: gridId
        }
      };

    case "SCHEDULE":
      return {
        type: START_DRAG_SCHEDULE,
        payload: {
          card: cardPlace,
          source: gridId
        }
      };

    default:
      return {};
  }
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
