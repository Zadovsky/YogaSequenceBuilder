import { PHP_URL } from "../config";
export const SET_LANG_BY_IP = "SET_LANG_BY_IP";

export function onCheckLangAction() {
  return (dispatch) => {
    fetch(PHP_URL + "checkcountry.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: SET_LANG_BY_IP,
          payload: result,
        });
      })
      .catch((error) => console.error(error));
  };
}
