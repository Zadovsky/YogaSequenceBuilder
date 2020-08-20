import { PHP_URL } from "../config";
export const CANCEL_REG = "CANCEL_REG";
export const NOT_EMAIL_REG = "NOT_EMAIL_REG";
export const CHANGE_EMAIL_REG = "CHANGE_EMAIL_REG";
export const LOGIN_ALREADY_EXIST = "LOGIN_ALREADY_EXIST";
export const LOGIN_REGED = "LOGIN_REGED";

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function onClickConfirmRegAction(email) {
  if (!validateEmail(email)) {
    return {
      type: NOT_EMAIL_REG,
    };
  }

  return (dispatch) => {
    fetch(PHP_URL + "regnewuser.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: email }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === LOGIN_ALREADY_EXIST) {
          return dispatch({
            type: LOGIN_ALREADY_EXIST,
          });
        } else
          return dispatch({
            type: LOGIN_REGED,
          });
      })
      .catch((error) => console.error(error));
  };
}

export function onClickCancelRegAction() {
  return {
    type: CANCEL_REG,
  };
}

export function onChangeEmailRegAction(e) {
  return {
    type: CHANGE_EMAIL_REG,
    payload: e.target.value,
  };
}
