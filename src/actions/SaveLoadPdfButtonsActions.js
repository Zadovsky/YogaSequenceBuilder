export const CLICK_SAVE = "CLICK_SAVE";
export const CLICK_LOAD = "CLICK_LOAD";
export const CLICK_PDF = "CLICK_PDF";
export const NO_AUTHORIZATION_SAVE = "NO_AUTHORIZATION_SAVE";
export const NO_AUTHORIZATION_LOAD = "NO_AUTHORIZATION_LOAD";

export function onClickLoad(login, password) {
  if (login === null) {
    return {
      type: NO_AUTHORIZATION_LOAD,
    };
  }
  return (dispatch) => {
    fetch("http://zadovskii.ru/php/getsequenceslist.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: login, password: password }),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: CLICK_LOAD,
          payload: result,
        });
      })
      .catch((error) => console.error(error));
  };
}

export function onClickSave(login, password, seqName) {
  if (login === null) {
    return {
      type: NO_AUTHORIZATION_SAVE,
    };
  }
  return (dispatch) => {
    fetch("http://zadovskii.ru/php/getsequenceslist.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login: login, password: password }),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: CLICK_SAVE,
          payload: {
            seqName: seqName,
            sequences: result,
          },
        });
      })
      .catch((error) => console.error(error));
  };
}

export function onClickPdf() {
  return {
    type: CLICK_PDF,
  };
}
