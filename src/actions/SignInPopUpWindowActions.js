export const CANCEL_SIGN_IN = "CANCEL_SIGN_IN";
export const SIGN_IN_EMPTY_FIELD = "SIGN_IN_EMPTY_FIELD";
export const CHANGE_EMAIL_SIGN_IN = "CHANGE_EMAIL_SIGN_IN";
export const CHANGE_PWD_SIGN_IN = "CHANGE_PWD_SIGN_IN";
export const LOGIN_CHECK = "LOGIN_CHECK";
export const FORGOT_PWD = "FORGOT_PWD";

export function onClickCancelSignInAction() {
  return {
    type: CANCEL_SIGN_IN
  };
}

export function onClickSignInAction(email, password) {
  if (email === "" || password === "") {
    return {
      type: SIGN_IN_EMPTY_FIELD
    };
  }

  return dispatch => {
    fetch("http://localhost/YSB/public/php/logincheck.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: LOGIN_CHECK,
          payload: result
        });
      })
      .catch(error => console.error(error));
  };
}

export function onChangeEmailSignInAction(e) {
  return {
    type: CHANGE_EMAIL_SIGN_IN,
    payload: e.target.value
  };
}

export function onChangePwdSignInAction(e) {
  return {
    type: CHANGE_PWD_SIGN_IN,
    payload: e.target.value
  };
}

export function onClickForgotPwdAction() {
  return {
    type: FORGOT_PWD
  };
}
