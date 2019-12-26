export const ADD_ASANA = "ADD_ASANA";
export const DRAG_ENTER_CARD = "DRAG_ENTER_CARD";
export const START_DRAG_CARD = "START_DRAG_CARD";
export const CLOSE_CARD = "CLOSE_CARD";

export function addAsanaAction(asanaId, gridId, itIsSchedulePanel, e) {
  if (e.target.closest(".MuiButtonBase-root") === null) {
    return {
      type: ADD_ASANA,
      payload: {
        asanaId: asanaId,
        gridId: gridId,
        itIsSchedulePanel: itIsSchedulePanel
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

export function dragEnterAction(cardPlace, gridId, itIsSchedulePanel) {
  return {
    type: DRAG_ENTER_CARD,
    payload: {
      cardPlace: cardPlace,
      gridId: gridId,
      itIsSchedulePanel: itIsSchedulePanel
    }
  };
}

export function startCardDragAction(cardPlace, gridId, itIsSchedulePanel) {
  return {
    type: START_DRAG_CARD,
    payload: {
      card: cardPlace,
      gridId: gridId,
      itIsSchedulePanel: itIsSchedulePanel
    }
  };
}
