import { combineReducers } from "redux";
import { asanasArrReducer } from "./asanasArr";
import { scheduleReducer } from "./schedule";
import { languageReducer } from "./language";
import { asanasReducer } from "./asanas";
import { pageTopReducer } from "./pageTop";
import { userReducer } from "./user";
import { infoPopUpReducer } from "./infoPopUp";

export const rootReducer = combineReducers({
  pageTop: pageTopReducer,
  language: languageReducer,
  schedule: scheduleReducer,
  asanasArr: asanasArrReducer,
  asanas: asanasReducer,
  user: userReducer,
  infoPopUp: infoPopUpReducer
});
