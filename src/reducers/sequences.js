import { CLICK_SAVE, CLICK_LOAD } from "../actions/SaveLoadPdfButtonsActions";
import {
  CLOSE_SEQ_LIST,
  SKIP_CLOSE_SEQ_LIST,
  CHANGE_SAVE_NAME,
  SAVE_SUCCESS,
  REWRITE_SUCCESS,
} from "../actions/SequencesListActions";
import {
  CLICK_DELETE_SEQ,
  DELETE_SEQ,
  CLICK_SEQ_SAVE,
  CLICK_SEQ_LOAD,
  SEQ_NAME_NOT_UNIQ,
} from "../actions/SequencesListActions";

export const MODE_SAVE = "MODE_SAVE";
export const MODE_LOAD = "MODE_LOAD";

const initialState = {
  isOpen: false,
  mode: null,
  skipClickAway: false,
  sequences: null,
  saveName: "",
  textsSave: {
    ru: {
      header: "Сохранить",
      button: "Сохранить",
    },
    en: {
      header: "Save",
      button: "Save",
    },
  },
  textsLoad: {
    ru: {
      header: "Загрузить",
      button: "Загрузить",
    },
    en: {
      header: "Load",
      button: "Load",
    },
  },
};

export function sequencesReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_SEQ_SAVE:
      return {
        ...state,
        saveName: action.payload,
      };

    case CLICK_SEQ_LOAD:
      return {
        ...state,
        saveName: action.payload.name,
      };

    case SEQ_NAME_NOT_UNIQ:
      return {
        ...state,
        skipClickAway: true,
      };

    case SAVE_SUCCESS:
      return {
        ...state,
        isOpen: false,
      };

    case REWRITE_SUCCESS:
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
        mode: MODE_SAVE,
        sequences: action.payload.sequences,
        saveName: action.payload.saveName,
      };

    case CLICK_LOAD:
      return {
        ...state,
        isOpen: true,
        mode: MODE_LOAD,
        sequences: action.payload,
        saveName: "",
      };

    case SKIP_CLOSE_SEQ_LIST:
      return {
        ...state,
        skipClickAway: false,
      };

    case CLOSE_SEQ_LIST:
      return {
        ...state,
        isOpen: false,
      };

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
