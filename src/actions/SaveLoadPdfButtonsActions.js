export const CLICK_SAVE = "CLICK_SAVE";
export const NO_AUTHORIZATION = "NO_AUTHORIZATION";

export function onClickSave(login, password) {
  if (login === null) {
    return {
      type: NO_AUTHORIZATION
    };
  }
  return dispatch => {
    fetch("http://localhost/YSB/public/php/getsequenceslist.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ login: login, password: password })
    })
      .then(response => response.json())
      .then(result => {
        return dispatch({
          type: CLICK_SAVE,
          payload: result
        });
      })
      .catch(error => console.error(error));
  };
}
