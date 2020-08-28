export const CHANGE_PANEL_NAME = "CHANGE_PANEL_NAME";
export const BLUR_PANEL_NAME = "BLUR_PANEL_NAME";

export function onChangePanelNameAction(e) {
  return {
    type: CHANGE_PANEL_NAME,
    payload: e.target.value,
  };
}

export function onBlurPanelNameAction(e) {
  return {
    type: BLUR_PANEL_NAME,
    payload: e.target.value,
  };
}
