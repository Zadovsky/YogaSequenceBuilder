export const CANCEL_FORGOT_PWD = "CANCEL_FORGOT_PWD";
export const PWD_SENT_TO_EMAIL = "PWD_SENT_TO_EMAIL";
export const NO_SUCH_LOGIN = "NO_SUCH_LOGIN";
export const CHANGE_EMAIL_FORGOT_PWD = "CHANGE_EMAIL_FORGOT_PWD";
export const FORGOT_PWD_EMPTY_FIELD = "FORGOT_PWD_EMPTY_FIELD";

export function onClickCancelForgotPwdAction() {
  return {
    type: CANCEL_FORGOT_PWD,
  };
}

export function onClickConfirmForgotPwdAction(email) {
  if (email === "") {
    return {
      type: FORGOT_PWD_EMPTY_FIELD,
    };
  }

  return (dispatch) => {
    fetch("http://zadovskii.ru/php/recoverypwd.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          dispatch({
            type: PWD_SENT_TO_EMAIL,
          });
        } else {
          dispatch({
            type: NO_SUCH_LOGIN,
          });
        }
      })
      .catch((error) => console.error(error));
  };
}

export function onChangeEmailForgotPwdAction(e) {
  return {
    type: CHANGE_EMAIL_FORGOT_PWD,
    payload: e.target.value,
  };
}
