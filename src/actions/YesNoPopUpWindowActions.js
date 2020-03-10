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

export function onConfirmChangePwdAction() {
  return { type: CONFIRM_CHANGE_PASSWORD };
}

export function onRefuseChangePwdAction() {
  return { type: REFUSE_CHANGE_PASSWORD };
}
