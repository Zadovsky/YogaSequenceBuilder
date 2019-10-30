export function startDrag(e) {
  const gridId = e.target.attributes.gridid.value;
  const cardPlace = +e.target.attributes.cardplace.value;

  switch (gridId) {
    case "ASANAS":
      return {
        type: "START_DRAG_ASANAS",
        payload: {
          card: cardPlace,
          source: gridId
        }
      };

    case "SCHEDULE":
      return {
        type: "START_DRAG_SCHEDULE",
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
    type: "END_DRAG"
  };
}
