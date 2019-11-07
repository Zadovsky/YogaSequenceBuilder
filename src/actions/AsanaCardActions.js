export const ADD_ASANA_ASANAS = "ADD_ASANA_ASANAS";
export const ADD_ASANA_SCHEDULE = "ADD_ASANA_SCHEDULE";
export const DRAG_ENTER_CARD_ASANAS = "DRAG_ENTER_CARD_ASANAS";
export const DRAG_ENTER_CARD_SCHEDULE = "DRAG_ENTER_CARD_SCHEDULE";

export function addAsanaAction(asanaId, gridId) {
  switch (gridId) {
    case "ASANAS":
      return {
        type: ADD_ASANA_ASANAS,
        payload: asanaId
      };

    case "SCHEDULE":
      return {
        type: ADD_ASANA_SCHEDULE,
        payload: asanaId
      };

    default:
      return {
        type: ""
      };
  }
}

export function dragEnterAction(cardPlace, gridId) {
  switch (gridId) {
    case "ASANAS":
      return {
        type: DRAG_ENTER_CARD_ASANAS,
        payload: cardPlace
      };

    case "SCHEDULE":
      return {
        type: DRAG_ENTER_CARD_SCHEDULE,
        payload: cardPlace
      };

    default:
      return {
        type: ""
      };
  }
}
