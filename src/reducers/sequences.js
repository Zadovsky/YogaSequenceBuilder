import { CLICK_SAVE } from "../actions/SaveLoadPdfButtonsActions";
import { CLOSE_SEQ_LIST } from "../actions/SequencesListActions";

const initialState = {
  isOpen: false,
  sequences: null,
  saveName: ""
};

export function sequencesReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_SAVE:
      return {
        ...state,
        isOpen: true,
        sequences: action.payload.sequences,
        saveName: action.payload.saveName
      };

    case CLOSE_SEQ_LIST:
      return { ...state, isOpen: false };

    default:
      return state;
  }
}
