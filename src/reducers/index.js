import { combineReducers } from "redux";
import { asanasArrReducer } from "./asanasArr";
import { scheduleReducer } from "./schedule";
import { languageReducer } from "./language";
import { asanasPanelReducer } from "./asanasPanel";

export const rootReducer = combineReducers({
  language: languageReducer,
  schedule: scheduleReducer,
  asanasArr: asanasArrReducer,
  asanasPanel: asanasPanelReducer
});
