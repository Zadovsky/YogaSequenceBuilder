export const CLOSE_LOGIN_SUCCESS_INFO = "CLOSE_LOGIN_SUCCESS_INFO";
export const CLOSE_LOGIN_FAILED_INFO = "CLOSE_LOGIN_FAILED_INFO";

export function onCloseLoginSuccessInfoAction() {
  return {
    type: CLOSE_LOGIN_SUCCESS_INFO
  };
}

export function onCloseLoginFailedInfoAction() {
  return {
    type: CLOSE_LOGIN_FAILED_INFO
  };
}
