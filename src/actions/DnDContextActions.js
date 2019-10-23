export function startDrag(e) {
  const gridId = e.target.attributes.gridid.value;
  const cardPlace = +e.target.attributes.cardplace.value;

  switch (gridId) {
    case "ASANAS":
      return {
        type: "START_DRAG_ASANAS",
        payload: cardPlace
      };

    case "SCHEDULE":
      return {
        type: "START_DRAG_SCHEDULE",
        payload: cardPlace
      };

    default:
      return {};
  }
}

export function endDrag(e) {
  return {
    type: "END_DRAG"
  };
}
