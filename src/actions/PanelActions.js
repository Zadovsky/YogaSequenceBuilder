export const CLOSE_MENU_SCHEDULE = "CLOSE_MENU_SCHEDULE";
export const CLOSE_MENU_ASANAS = "CLOSE_MENU_ASANAS";

export function onCloseMenuAsanasAction() {
  return {
    type: CLOSE_MENU_ASANAS,
  };
}

export function onCloseMenuScheduleAction() {
  return {
    type: CLOSE_MENU_SCHEDULE,
  };
}
