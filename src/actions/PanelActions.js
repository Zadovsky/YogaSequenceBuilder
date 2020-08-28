export const OPEN_MENU_SCHEDULE = "OPEN_MENU_SCHEDULE";
export const OPEN_MENU_ASANAS = "OPEN_MENU_ASANAS";
export const CLOSE_MENU_SCHEDULE = "CLOSE_MENU_SCHEDULE";
export const CLOSE_MENU_ASANAS = "CLOSE_MENU_ASANAS";

export function onOpenMenuAsanasAction() {
  return {
    type: OPEN_MENU_ASANAS,
  };
}

export function onOpenMenuScheduleAction() {
  return {
    type: OPEN_MENU_SCHEDULE,
  };
}

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
