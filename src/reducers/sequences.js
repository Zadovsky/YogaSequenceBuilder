import { CLICK_SAVE } from "../actions/SaveLoadPdfButtonsActions";
import {
  CLOSE_SEQ_LIST,
  CHANGE_SAVE_NAME,
  SAVE_SUCCESS,
} from "../actions/SequencesListActions";
import { CLICK_DELETE_SEQ, DELETE_SEQ } from "../actions/SequencesListActions";

const initialState = {
  isOpen: false,
  skipClickAway: false,
  sequences: null,
  saveName: "",
  texts: {
    ru: {
      saveHeader: "Сохранить",
      saveButton: "Сохранить",
    },
    en: {
      saveHeader: "Save",
      saveButton: "Save",
    },
  },
};

export function sequencesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SUCCESS:
      return {
        ...state,
        isOpen: false,
      };

    case CHANGE_SAVE_NAME:
      return {
        ...state,
        saveName: action.payload,
      };

    case CLICK_SAVE:
      return {
        ...state,
        isOpen: true,
        sequences: action.payload.sequences,
        saveName: action.payload.saveName,
      };

    case CLOSE_SEQ_LIST:
      if (state.skipClickAway) {
        return {
          ...state,
          skipClickAway: false,
        };
      } else {
        return {
          ...state,
          isOpen: false,
        };
      }

    case CLICK_DELETE_SEQ:
      return { ...state, skipClickAway: true };

    case DELETE_SEQ:
      return {
        ...state,
        sequences: state.sequences.filter((seq) => {
          return seq.id !== action.payload;
        }),
      };

    default:
      return state;
  }
}
