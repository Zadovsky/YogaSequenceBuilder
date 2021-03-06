import Cookies from "js-cookie";
import { PHP_URL } from "../config";
export const CANCEL_SIGN_IN = "CANCEL_SIGN_IN";
export const SIGN_IN_EMPTY_FIELD = "SIGN_IN_EMPTY_FIELD";
export const CHANGE_EMAIL_SIGN_IN = "CHANGE_EMAIL_SIGN_IN";
export const CHANGE_PWD_SIGN_IN = "CHANGE_PWD_SIGN_IN";
export const LOGIN_CHECK_SUCCESS = "LOGIN_CHECK_SUCCESS";
export const LOGIN_CHECK_FAIL = "LOGIN_CHECK_FAIL";
export const FORGOT_PWD = "FORGOT_PWD";

export function onClickCancelSignInAction() {
  return {
    type: CANCEL_SIGN_IN,
  };
}

export function onClickSignInAction(email, password) {
  if (email === "" || password === "") {
    return {
      type: SIGN_IN_EMPTY_FIELD,
    };
  }

  return (dispatch) => {
    fetch(PHP_URL + "logincheck.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: email, password: password }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          Cookies.set("login", email, { expires: 365 });
          Cookies.set("password", password, { expires: 365 });
          return dispatch({
            type: LOGIN_CHECK_SUCCESS,
            payload: {
              login: email,
              password: password,
            },
          });
        } else
          return dispatch({
            type: LOGIN_CHECK_FAIL,
          });
      })
      .catch((error) => console.error(error));
  };
}

export function onChangeEmailSignInAction(e) {
  return {
    type: CHANGE_EMAIL_SIGN_IN,
    payload: e.target.value,
  };
}

export function onChangePwdSignInAction(e) {
  return {
    type: CHANGE_PWD_SIGN_IN,
    payload: e.target.value,
  };
}

export function onClickForgotPwdAction() {
  return {
    type: FORGOT_PWD,
  };
}
