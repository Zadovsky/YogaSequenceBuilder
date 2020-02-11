import { ON_CLICK_ASANAS_NAVIGATION } from "../actions/AsanasNavigationActions";
import { GRID_BLOCK_SCROLL } from "../actions/AsanasGridBlockActions";

const initialState = {
  selectedGroupId: null,
  panelName: {
    ru: "Каталог асан"
  }
};

export function asanasReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_ASANAS_NAVIGATION:
      return { ...state, selectedGroupId: action.payload };

    case GRID_BLOCK_SCROLL:
      return { ...state, selectedGroupId: null };

    default:
      return state;
  }
}
