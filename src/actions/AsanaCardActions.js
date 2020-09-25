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
  const target = e.touches[0].target.closest(".AsanaCard");
  const rect = target.getBoundingClientRect();

  return (dispatch) => {
    dispatch({
      type: TOUCH_START,
      payload: {
        target: target,
        height: target.offsetHeight,
        width: target.offsetWidth,
        top: rect.top,
        left: rect.left,
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: TOUCH_TIMEOUT_END,
          payload: {
            gridId: gridId,
            card: cardPlace,
            schedule: schedule,
          },
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

export function touchMoveDndAction(e, ref) {
  e.preventDefault();
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  ref.current.style.display = "none";
  const elFromP = document.elementFromPoint(x, y);
  ref.current.style.display = "block";

  return {
    type: TOUCH_MOVE_DND,
    payload: {
      x: x,
      y: y,
      e: elFromP,
    },
  };
}

export function touchMoveScrollAction() {
  return {
    type: TOUCH_MOVE_SCROLL,
  };
}
