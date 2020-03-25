export const CANCEL_REG = "CANCEL_REG";
export const CHANGE_EMAIL_REG = "CHANGE_EMAIL_REG";

export function onClickCancelRegAction() {
  return {
    type: CANCEL_REG
  };
}

export function onChangeEmailRegAction(e) {
  return {
    type: CHANGE_EMAIL_REG,
    payload: e.target.value
  };
}
