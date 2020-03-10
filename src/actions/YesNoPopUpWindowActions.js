export const CONFIRM_EXIT = "CONFIRM_EXIT";
export const REFUSE_EXIT = "REFUSE_EXIT";
export const CONFIRM_CHANGE_PASSWORD = "CONFIRM_CHANGE_PASSWORD";
export const REFUSE_CHANGE_PASSWORD = "REFUSE_CHANGE_PASSWORD";

export function onConfirmExitAction() {
  return {
    type: CONFIRM_EXIT
  };
}

export function onRefuseExitAction() {
  return {
    type: REFUSE_EXIT
  };
}

export function onConfirmChangePwdAction(email, password) {
  return dispatch => {
    fetch("http://localhost/YSB/public/php/changepwd.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: CONFIRM_CHANGE_PASSWORD,
          payload: result
        });
      })
      .catch(error => console.error(error));
  };
}

export function onRefuseChangePwdAction() {
  return { type: REFUSE_CHANGE_PASSWORD };
}
