export const CLICK_YES = "CLICK_YES";
export const CLICK_NO = "CLICK_NO";

export function onYesAction() {
  return {
    type: CLICK_YES
  };
}

export function onNoAction() {
  return {
    type: CLICK_NO
  };
}
