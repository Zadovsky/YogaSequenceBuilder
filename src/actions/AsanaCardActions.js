export const ADD_ASANA = "ADD_ASANA";
export const DRAG_ENTER_CARD = "DRAG_ENTER_CARD";
export const START_DRAG_CARD_ASANAS = "START_DRAG_CARD_ASANAS";
export const START_DRAG_CARD_SCHEDULE = "START_DRAG_CARD_SCHEDULE";
export const CLOSE_CARD = "CLOSE_CARD";

export function addAsanaAction(asanaId, gridId) {
  return {
    type: ADD_ASANA,
    payload: {
      asanaId: asanaId,
      gridId: gridId,
    },
  };
}

export function closeCardAction(cardIndex, gridId) {
  return {
    type: CLOSE_CARD,
    payload: {
      cardIndex: cardIndex,
      gridId: gridId,
    },
  };
}

export function dragEnterAction(cardPlace, gridId, itIsSchedulePanel) {
  return {
    type: DRAG_ENTER_CARD,
    payload: {
      cardPlace: cardPlace,
      gridId: gridId,
      itIsSchedulePanel: itIsSchedulePanel,
    },
  };
}

export function startCardDragAsanasAction(cardPlace, gridId) {
  return {
    type: START_DRAG_CARD_ASANAS,
    payload: {
      card: cardPlace,
      gridId: gridId,
    },
  };
}

export function startCardDragScheduleAction(cardPlace, gridId) {
  return {
    type: START_DRAG_CARD_SCHEDULE,
    payload: {
      card: cardPlace,
      gridId: gridId,
    },
  };
}
