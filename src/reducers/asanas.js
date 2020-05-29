import { ON_CLICK_ASANAS_NAVIGATION } from "../actions/AsanasNavigationActions";
import { GRID_BLOCK_SCROLL } from "../actions/AsanasGridBlockActions";
import { MENU_BUTTON_ASANAS } from "../actions/PanelNameActions";
import { CLOSE_MENU_ASANAS } from "../actions/PanelActions";

const initialState = {
  selectedGroupId: null,
  openMenu: false,
  panelDefaultName: {
    ru: "Список асан",
    en: "Asanas list",
  },
};

export function asanasReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MENU_ASANAS:
      return {
        ...state,
        openMenu: false,
      };

    case MENU_BUTTON_ASANAS:
      return {
        ...state,
        openMenu: true,
      };

    case ON_CLICK_ASANAS_NAVIGATION:
      return { ...state, selectedGroupId: action.payload, openMenu: false };

    case GRID_BLOCK_SCROLL:
      return { ...state, selectedGroupId: null };

    default:
      return state;
  }
}
