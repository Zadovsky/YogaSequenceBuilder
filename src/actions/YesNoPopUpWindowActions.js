import Cookies from "js-cookie";
import { PHP_URL } from "../config";
export const CONFIRM_EXIT = "CONFIRM_EXIT";
export const CLOSE_YESNO_POPUP = "CLOSE_YESNO_POPUP";
export const CONFIRM_CHANGE_PASSWORD = "CONFIRM_CHANGE_PASSWORD";

export function onConfirmExitAction() {
  Cookies.remove("login");
  Cookies.remove("password");
  return {
    type: CONFIRM_EXIT,
  };
}

export function onConfirmChangePwdAction(email, password) {
  return (dispatch) => {
    fetch(PHP_URL + "changepwd.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((result) => {
        Cookies.set("password", result, { expires: 365 });
        return dispatch({
          type: CONFIRM_CHANGE_PASSWORD,
          payload: result,
        });
      })
      .catch((error) => console.error(error));
  };
}

export function onCloseYesNoPopUpAction() {
  return { type: CLOSE_YESNO_POPUP };
}
