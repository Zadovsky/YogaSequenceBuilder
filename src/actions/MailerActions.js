export const SENT_MAIL = "SENT_MAIL";

export function sendMailAction() {
  console.log("sendMailAction");
  return {
    type: SENT_MAIL,
    payload: {},
  };
}
