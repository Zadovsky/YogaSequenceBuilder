export const CHANGE_PANEL_NAME = "CHANGE_PANEL_NAME";
export const BLUR_PANEL_NAME = "BLUR_PANEL_NAME";
export const MENU_BUTTON_SCHEDULE = "MENU_BUTTON_SCHEDULE";
export const MENU_BUTTON_ASANAS = "MENU_BUTTON_ASANAS";

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

export function onPressMenuButtonAsanasAction() {
  return {
    type: MENU_BUTTON_ASANAS,
  };
}

export function onPressMenuButtonScheduleAction() {
  return {
    type: MENU_BUTTON_SCHEDULE,
  };
}
