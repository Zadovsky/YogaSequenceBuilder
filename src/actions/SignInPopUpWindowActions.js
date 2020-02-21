export const CANCEL_SIGN_IN = "CANCEL_SIGN_IN";
export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_EMPTY_FIELD = "SIGN_IN_EMPTY_FIELD";
export const CHANGE_EMAIL_SIGN_IN = "CHANGE_EMAIL_SIGN_IN";
export const CHANGE_PWD_SIGN_IN = "CHANGE_PWD_SIGN_IN";

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

  return {
    type: SIGN_IN
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
