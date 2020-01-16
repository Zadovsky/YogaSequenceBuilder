import { combineReducers } from "redux";
import { asanasArrReducer } from "./asanasArr";
import { scheduleReducer } from "./schedule";
import { languageReducer } from "./language";
import { asanasReducer } from "./asanas";

export const rootReducer = combineReducers({
  language: languageReducer,
  schedule: scheduleReducer,
  asanasArr: asanasArrReducer,
  asanas: asanasReducer
});
