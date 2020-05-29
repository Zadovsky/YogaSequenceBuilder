import { ON_CLICK_ASANAS_NAVIGATION } from "../actions/AsanasNavigationActions";
import { GRID_BLOCK_SCROLL } from "../actions/AsanasGridBlockActions";
import { MENU_BUTTON_ASANAS } from "../actions/PanelNameActions";

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
    case MENU_BUTTON_ASANAS:
      return {
        ...state,
        openMenu: !state.openMenu,
      };

    case ON_CLICK_ASANAS_NAVIGATION:
      return { ...state, selectedGroupId: action.payload };

    case GRID_BLOCK_SCROLL:
      return { ...state, selectedGroupId: null };

    default:
      return state;
  }
}
