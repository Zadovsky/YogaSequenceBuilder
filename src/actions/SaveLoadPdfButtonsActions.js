export const CLICK_SAVE = "CLICK_SAVE";
export const NO_AUTHORIZATION = "NO_AUTHORIZATION";

export function onClickSave(login, password) {
  if (login === null) {
    return {
      type: NO_AUTHORIZATION
    };
  }

  return {
    type: CLICK_SAVE
  };
}
