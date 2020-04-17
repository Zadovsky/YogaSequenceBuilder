import Cookies from "js-cookie";
export const SET_COOKIES = "SET_COOKIES";

export function onSetCookiesAction(cards, panelName) {
  Cookies.set("cards", cards, { expires: 365 });
  Cookies.set("panelName", panelName, { expires: 365 });

  return {
    type: "SET_COOKIES",
  };
}
