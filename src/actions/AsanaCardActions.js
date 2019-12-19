export const ADD_ASANA = "ADD_ASANA";
export const DRAG_ENTER_CARD = "DRAG_ENTER_CARD";
export const START_DRAG_CARD = "START_DRAG_CARD";
export const CLOSE_CARD = "CLOSE_CARD";

export function addAsanaAction(asanaId, gridId, dynamicPanel, e) {
  if (e.target.closest(".MuiButtonBase-root") === null) {
    return {
      type: ADD_ASANA,
      payload: {
        asanaId: asanaId,
        gridId: gridId,
        dynamicPanel: dynamicPanel
      }
    };
  } else {
    return {
      type: ""
    };
  }
}

export function closeCardAction(cardIndex, gridId) {
  return {
    type: CLOSE_CARD,
    payload: {
      cardIndex: cardIndex,
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

export function startCardDragAction(cardPlace, gridId) {
  return {
    type: START_DRAG_CARD,
    payload: {
      card: cardPlace,
      source: gridId
    }
  };
}
