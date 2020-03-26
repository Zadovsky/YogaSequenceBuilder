import { CLICK_SAVE } from "../actions/SaveLoadPdfButtonsActions";

const initialState = {};

export function sequencesReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_SAVE:
      console.log(CLICK_SAVE);
      return state;

    default:
      return state;
  }
}
