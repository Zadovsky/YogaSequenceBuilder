import Cookies from "js-cookie";
export const GET_LOGIN_COOKIES = "GET_LOGIN_COOKIES";

export function onReadCookiesAction() {
  var login = Cookies.get("login");
  var password = Cookies.get("password");
  var cards = Cookies.get("cards");
  var panelName = Cookies.get("panelName");
  var nextGridKey = Cookies.get("nextGridKey");
  var nextCardKey = Cookies.get("nextCardKey");

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

  if (login === undefined || password === undefined) {
    return {
      type: GET_LOGIN_COOKIES,
      payload: {
        login: null,
        password: null,
        cards: cards,
        panelName: panelName,
        nextGridKey: nextGridKey,
        nextCardKey: nextCardKey,
      },
    };
  }

  return (dispatch) => {
    fetch("http://localhost/YSB/public/php/logincheck.php", {
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
            type: GET_LOGIN_COOKIES,
            payload: {
              login: login,
              password: password,
              cards: cards,
              panelName: panelName,
              nextGridKey: nextGridKey,
              nextCardKey: nextCardKey,
            },
          });
        } else {
          return dispatch({
            type: GET_LOGIN_COOKIES,
            payload: {
              login: null,
              password: null,
              cards: cards,
              panelName: panelName,
              nextGridKey: nextGridKey,
              nextCardKey: nextCardKey,
            },
          });
        }
      })
      .catch((error) => console.error(error));
  };
}
