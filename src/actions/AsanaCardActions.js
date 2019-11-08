export const ADD_ASANA = "ADD_ASANA";
export const DRAG_ENTER_CARD = "DRAG_ENTER_CARD";

export function addAsanaAction(asanaId, gridId) {
  return {
    type: ADD_ASANA,
    payload: {
      asanaId: asanaId,
      gridId: gridId
    }
  };
}

export function dragEnterAction(cardPlace, gridId) {
  return {
    type: DRAG_ENTER_CARD,
    payload: {
      cardPlace: cardPlace,
      gridId: gridId
    }
  };
}
