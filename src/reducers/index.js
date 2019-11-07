import { combineReducers } from "redux";
import { asanasReducer } from "./asanas";
import { scheduleReducer } from "./schedule";
import { languageReducer } from "./language";

export const rootReducer = combineReducers({
  language: languageReducer,
  schedule: scheduleReducer,
  asanas: asanasReducer
});
