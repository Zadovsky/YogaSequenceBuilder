export function addAsanaAction(asanaId) {
  return {
    type: "ADD_ASANA",
    payload: asanaId
  };
}

export function dragEnterAction(cardPlace, gridId) {
  switch (gridId) {
    case "ASANAS":
      return {
        type: "DRAG_ENTER_CARD_ASANAS",
        payload: cardPlace
      };

    case "SCHEDULE":
      return {
        type: "DRAG_ENTER_CARD_SCHEDULE",
        payload: cardPlace
      };

    default:
      return {};
  }
}

export function dragLeaveAction(cardPlace, gridId) {
  return {
    type: "DRAG_LEAVE",
  };
}
