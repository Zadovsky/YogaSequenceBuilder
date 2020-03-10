export const ACCEPT_EXIT = "ACCEPT_EXIT";
export const REFUSE_EXIT = "REFUSE_EXIT";

export function onAcceptExitAction() {
  return {
    type: ACCEPT_EXIT
  };
}

export function onRefuseExitAction() {
  return {
    type: REFUSE_EXIT
  };
}
