export const EXIT_ACCOUNT = "EXIT_ACCOUNT";
export const USERNAME_CLICK = "USERNAME_CLICK";
export const USER_MENU_CLOSE = "USER_MENU_CLOSE";

export function usernameClickAction(e) {
  return { type: USERNAME_CLICK, payload: e.currentTarget };
}

export function userMenuClose() {
  return { type: USER_MENU_CLOSE };
}

export function exitItemClickAction() {
  return { type: EXIT_ACCOUNT };
}
