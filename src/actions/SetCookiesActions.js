import Cookies from "js-cookie";
export const SET_COOKIES = "SET_COOKIES";
export const SET_FIRST_START_COOKIE = "SET_FIRST_START_COOKIE";

export function onSetCookiesAction(cards, panelName, nextGridKey, nextCardKey) {
  Cookies.set("cards", cards, { expires: 365 });
  Cookies.set("panelName", panelName, { expires: 365 });
  Cookies.set("nextGridKey", nextGridKey, { expires: 365 });
  Cookies.set("nextCardKey", nextCardKey, { expires: 365 });

  return {
    type: "SET_COOKIES",
  };
}

export function onSetFirstStartCookieAction() {
  Cookies.set("firstStart", false, { expires: 365 });

  return {
    type: "SET_FIRST_START_COOKIE",
  };
}
