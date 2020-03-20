import Cookies from "js-cookie";
export const GET_LOGIN_COOKIES = "GET_LOGIN_COOKIES";

export function onAppConstruction() {
  var login = Cookies.get("login");
  var password = Cookies.get("password");

  if (login === undefined || password === undefined) {
    return {
      type: ""
    };
  }

  return dispatch => {
    fetch("http://localhost/YSB/public/php/logincheck.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ email: login, password: password })
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          return dispatch({
            type: GET_LOGIN_COOKIES,
            payload: { login: login, password: password }
          });
        } else {
          return dispatch({
            type: ""
          });
        }
      })
      .catch(error => console.error(error));
  };
}
