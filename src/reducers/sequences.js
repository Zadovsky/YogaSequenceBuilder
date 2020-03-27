import { CLICK_SAVE } from "../actions/SaveLoadPdfButtonsActions";

const initialState = {
  isOpen: false,
  sequences: null
};

export function sequencesReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_SAVE:
      return { ...state, isOpen: true, sequences: action.payload };

    default:
      return state;
  }
}
