export const CLOSE_LOGIN_SUCCESS_INFO = "CLOSE_LOGIN_SUCCESS_INFO";
export const CLOSE_LOGIN_FAILED_INFO = "CLOSE_LOGIN_FAILED_INFO";
export const CLOSE_PASSWORD_CHANGED_INFO = "CLOSE_PASSWORD_CHANGED_INFO";
export const CLOSE_PASSWORD_SENT_INFO = "CLOSE_PASSWORD_SENT_INFO";
export const CLOSE_NO_LOGIN_INFO = "CLOSE_NO_LOGIN_INFO";

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

export function onClosePwdChangedInfoAction() {
  return {
    type: CLOSE_PASSWORD_CHANGED_INFO
  };
}

export function onClosePwdSentInfoAction() {
  return {
    type: CLOSE_PASSWORD_SENT_INFO
  };
}

export function onCloseNoLoginInfoAction() {
  return {
    type: CLOSE_NO_LOGIN_INFO
  };
}
