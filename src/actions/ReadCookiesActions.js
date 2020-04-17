import Cookies from "js-cookie";
export const GET_LOGIN_COOKIES = "GET_LOGIN_COOKIES";

export function onReadCookiesAction() {
  var login = Cookies.get("login");
  var password = Cookies.get("password");
  var cards = Cookies.get("cards");
  var panelName = Cookies.get("panelName");

  if (login !== undefined) {
    login = JSON.parse(login);
  }

  if (password !== undefined) {
    password = JSON.parse(password);
  }

  if (cards === undefined) {
    cards = [{ gridCards: [], gridKey: 0, gridName: null }];
  } else {
    cards = JSON.parse(cards);
  }

  if (panelName === undefined) {
    panelName = null;
  } else {
    panelName = JSON.parse(panelName);
  }

  if (login === undefined || password === undefined) {
    return {
      type: GET_LOGIN_COOKIES,
      payload: {
        login: null,
        password: null,
        cards: cards,
        panelName: panelName,
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
            },
          });
        }
      })
      .catch((error) => console.error(error));
  };
}
