import { PHP_URL } from "../config";
export const SENT_MAIL = "SENT_MAIL";

export function sendMailAction(email, subj, text) {
  return (dispatch) => {
    fetch(PHP_URL + "mailer.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: email, subj: subj, text: text }),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: SENT_MAIL,
          payload: {},
        });
      })
      .catch((error) => console.error(error));
  };
}
