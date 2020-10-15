import Cookies from "js-cookie";
import { PHP_URL } from "../config";
export const GET_COOKIES = "GET_COOKIES";

export function onReadCookiesAction() {
  var login = Cookies.get("login");
  var password = Cookies.get("password");
  var cards = Cookies.get("cards");
  var panelName = Cookies.get("panelName");
  var nextGridKey = Cookies.get("nextGridKey");
  var nextCardKey = Cookies.get("nextCardKey");
  var firstStart = Cookies.get("firstStart");
  var lang = Cookies.get("lang");

  if (cards === undefined) {
    cards = [{ gridCards: [], gridKey: 0, gridName: null }];
  } else {
    cards = JSON.parse(cards);
  }

  if (panelName === undefined) {
    panelName = null;
  }

  if (nextGridKey === undefined) {
    nextGridKey = 1;
  } else {
    nextGridKey = +nextGridKey;
  }

  if (nextCardKey === undefined) {
    nextCardKey = 0;
  } else {
    nextCardKey = +nextCardKey;
  }

  if (firstStart === undefined) {
    firstStart = true;
  } else firstStart = false;

  if (login === undefined || password === undefined) {
    return {
      type: GET_COOKIES,
      payload: {
        login: null,
        password: null,
        cards: cards,
        panelName: panelName,
        nextGridKey: nextGridKey,
        nextCardKey: nextCardKey,
        firstStart: firstStart,
        lang: lang,
      },
    };
  }

  return (dispatch) => {
    fetch(PHP_URL + "logincheck.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: login, password: password }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          return dispatch({
            type: GET_COOKIES,
            payload: {
              login: login,
              password: password,
              cards: cards,
              panelName: panelName,
              nextGridKey: nextGridKey,
              nextCardKey: nextCardKey,
              firstStart: firstStart,
              lang: lang,
            },
          });
        } else {
          return dispatch({
            type: GET_COOKIES,
            payload: {
              login: null,
              password: null,
              cards: cards,
              panelName: panelName,
              nextGridKey: nextGridKey,
              nextCardKey: nextCardKey,
              firstStart: firstStart,
              lang: lang,
            },
          });
        }
      })
      .catch((error) => console.error(error));
  };
}
