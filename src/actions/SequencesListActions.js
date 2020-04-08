export const CLOSE_SEQ_LIST = "CLOSE_SEQ_LIST";
export const CHANGE_SAVE_NAME = "CHANGE_SAVE_NAME";
export const CLICK_DELETE_SEQ = "CLICK_DELETE_SEQ";
export const DELETE_SEQ = "DELETE_SEQ";
export const SAVE_SUCCESS = "SAVE_SUCCESS";

export function closeSeqListAction() {
  return {
    type: CLOSE_SEQ_LIST,
  };
}

export function onChangeSaveNameAction(e) {
  return {
    type: CHANGE_SAVE_NAME,
    payload: e.target.value,
  };
}

export function clickDeleteSequenceAction(deleteAction) {
  return {
    type: CLICK_DELETE_SEQ,
    payload: deleteAction,
  };
}

export function deleteSequenceAction(login, password, id) {
  console.log(id);
  return (dispatch) => {
    fetch("http://localhost/YSB/public/php/deletesequence.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        login: login,
        password: password,
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: DELETE_SEQ,
          payload: result,
        });
      })
      .catch((error) => console.error(error));
  };
}

export function onClickSaveButton(login, password, saveName, sequence) {
  const curDate = new Date();
  const dateTime =
    curDate.getFullYear() +
    "-" +
    (curDate.getMonth() + 1) +
    "-" +
    curDate.getDate() +
    " " +
    curDate.getHours() +
    ":" +
    curDate.getMinutes() +
    ":" +
    curDate.getSeconds();

  return (dispatch) => {
    fetch("http://localhost/YSB/public/php/savesequence.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        login: login,
        password: password,
        saveName: saveName,
        dateTime: dateTime,
        sequence: sequence,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: SAVE_SUCCESS,
          payload: result,
        });
      })
      .catch((error) => console.error(error));
  };
}