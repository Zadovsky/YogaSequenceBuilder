import { TOUCH_DND_START_TIMEOUT } from "../config";
export const ADD_ASANA = "ADD_ASANA";
export const DRAG_ENTER_CARD = "DRAG_ENTER_CARD";
export const START_DRAG_CARD_ASANAS = "START_DRAG_CARD_ASANAS";
export const START_DRAG_CARD_SCHEDULE = "START_DRAG_CARD_SCHEDULE";
export const CLOSE_CARD = "CLOSE_CARD";
export const TOUCH_START = "TOUCH_START";
export const TOUCH_MOVE_DND = "TOUCH_MOVE_DND";
export const TOUCH_MOVE_SCROLL = "TOUCH_MOVE_SCROLL";
export const TOUCH_END = "TOUCH_END";
export const TOUCH_TIMEOUT_END = "TOUCH_TIMEOUT_END";

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

export function dragEnterAction(cardPlace, gridId) {
  return {
    type: DRAG_ENTER_CARD,
    payload: {
      cardPlace: cardPlace,
      gridId: gridId,
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

export function touchStartAction(e, cardPlace, gridId, schedule) {
  return (dispatch) => {
    dispatch({
      type: TOUCH_START,
      payload: {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        gridId: gridId,
        card: cardPlace,
        schedule: schedule,
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: TOUCH_TIMEOUT_END,
        }),
      TOUCH_DND_START_TIMEOUT
    );
  };
}

export function touchEndAction() {
  return {
    type: TOUCH_END,
  };
}

export function touchMoveDndAction(e) {
  return {
    type: TOUCH_MOVE_DND,
  };
}

export function touchMoveScrollAction(e) {
  return {
    type: TOUCH_MOVE_SCROLL,
    payload: {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    },
  };
}
