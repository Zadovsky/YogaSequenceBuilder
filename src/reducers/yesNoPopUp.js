import {
  CLOSE_YESNO_POPUP,
  CONFIRM_EXIT,
  CONFIRM_CHANGE_PASSWORD
} from "../actions/YesNoPopUpWindowActions";
import { EXIT_ACCOUNT, CHANGE_PASSWORD } from "../actions/UserMenuActions";
import { CLICK_DELETE_SEQ, DELETE_SEQ } from "../actions/SequencesListActions";

const initialState = {
  isOpen: false,
  texts: null,
  yesAction: null,
  exitAccountTexts: {
    ru: {
      title: "Вы уверены, что хотите выйти из аккаунта?",
      text: ""
    },
    en: {
      title: "Are you sure to exit the account?",
      text: ""
    }
  },
  changePwdTexts: {
    ru: {
      title: "Вы уверены, что хотите сменить пароль?",
      text: ""
    },
    en: {
      title: "Are you sure to change the password?",
      text: ""
    }
  },
  deleteSequenceTexts: {
    ru: {
      title: "Вы уверены, что хотите удалить последовательность?",
      text: ""
    },
    en: {
      title: "Are you sure to delete sequence?",
      text: ""
    }
  }
};

export function yesNoPopUpReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_DELETE_SEQ:
      return {
        ...state,
        isOpen: true,
        texts: state.deleteSequenceTexts,
        yesAction: action.payload
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        isOpen: true,
        texts: state.changePwdTexts,
        yesAction: action.payload
      };

    case EXIT_ACCOUNT:
      return {
        ...state,
        isOpen: true,
        texts: state.exitAccountTexts,
        yesAction: action.payload
      };

    case DELETE_SEQ:
      return { ...state, isOpen: false, texts: null, yesAction: null };

    case CONFIRM_CHANGE_PASSWORD:
      return { ...state, isOpen: false, texts: null, yesAction: null };

    case CONFIRM_EXIT:
      return { ...state, isOpen: false, texts: null, yesAction: null };

    case CLOSE_YESNO_POPUP:
      return { ...state, isOpen: false, texts: null, yesAction: null };

    default:
      return state;
  }
}
