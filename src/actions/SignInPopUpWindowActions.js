export const CANCEL_SIGN_IN = "CANCEL_SIGN_IN";
export const SIGN_IN = "SIGN_IN";

export function onClickCancelSignInAction() {
  return {
    type: CANCEL_SIGN_IN
  };
}

export function onClickSignInAction() {
  return {
    type: SIGN_IN
  };
}
