export const CLOSE_SEQ_LIST = "CLOSE_SEQ_LIST";
export const CHANGE_SAVE_NAME = "CHANGE_SAVE_NAME";
export const CLICK_DELETE_SEQ = "CLICK_DELETE_SEQ";
export const DELETE_SEQ = "DELETE_SEQ";
export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const REWRITE_SUCCESS = "REWRITE_SUCCESS";
export const SEQ_NAME_NOT_UNIQ = "SEQ_NAME_NOT_UNIQ";

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

export function onClickDeleteSequenceAction(deleteAction) {
  return {
    type: CLICK_DELETE_SEQ,
    payload: deleteAction,
  };
}

export function deleteSequenceAction(login, password, id) {
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
          payload: id,
        });
      })
      .catch((error) => console.error(error));
  };
}

export function onClickSaveSequenceAction(
  login,
  password,
  saveName,
  sequences,
  cards,
  rewriteSequenceAction
) {
  const sameNameIndex = sequences.findIndex((seq) => {
    return seq.name === saveName;
  });

  if (sameNameIndex === -1) {
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
          sequence: cards,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          return dispatch({
            type: SAVE_SUCCESS,
            payload: saveName,
          });
        })
        .catch((error) => console.error(error));
    };
  } else {
    return {
      type: SEQ_NAME_NOT_UNIQ,
      payload: () =>
        rewriteSequenceAction(
          login,
          password,
          saveName,
          cards,
          sequences[sameNameIndex].id
        ),
    };
  }
}

export function rewriteSequenceAction(
  login,
  password,
  saveName,
  cards,
  deleteId
) {
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
    fetch("http://localhost/YSB/public/php/rewritesequence.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        login: login,
        password: password,
        saveName: saveName,
        dateTime: dateTime,
        sequence: cards,
        id: deleteId,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: REWRITE_SUCCESS,
          payload: saveName,
        });
      })
      .catch((error) => console.error(error));
  };
}
