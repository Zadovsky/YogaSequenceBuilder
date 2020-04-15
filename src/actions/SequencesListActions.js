export const CLOSE_SEQ_LIST = "CLOSE_SEQ_LIST";
export const SKIP_CLOSE_SEQ_LIST = "SKIP_CLOSE_SEQ_LIST";
export const CHANGE_SAVE_NAME = "CHANGE_SAVE_NAME";
export const CLICK_DELETE_SEQ = "CLICK_DELETE_SEQ";
export const DELETE_SEQ = "DELETE_SEQ";
export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const REWRITE_SUCCESS = "REWRITE_SUCCESS";
export const SEQ_NAME_NOT_UNIQ = "SEQ_NAME_NOT_UNIQ";
export const CLICK_SEQ_SAVE = "CLICK_SEQ_SAVE";
export const CLICK_SEQ_LOAD = "CLICK_SEQ_LOAD";
export const NO_SEQ_NAME = "NO_SEQ_NAME";
export const EMPTY_SEQ_NAME_LOAD = "EMPTY_SEQ_NAME_LOAD";
export const EMPTY_SEQ_NAME_SAVE = "EMPTY_SEQ_NAME_SAVE";
export const LOAD_SEQ = "LOAD_SEQ";

export function closeSeqListAction(skip) {
  if (skip) {
    return {
      type: SKIP_CLOSE_SEQ_LIST,
    };
  } else {
    return {
      type: CLOSE_SEQ_LIST,
    };
  }
}

export function onChangeSaveNameAction(e) {
  return {
    type: CHANGE_SAVE_NAME,
    payload: e.target.value,
  };
}

export function onClickSequenceLoadAction(name, id, login, password) {
  return (dispatch) => {
    fetch("http://localhost/YSB/public/php/loadsequence.php", {
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
        console.log(result);
        return dispatch({
          type: CLICK_SEQ_LOAD,
          payload: { name: name, cards: result.cards },
        });
      })
      .catch((error) => console.error(error));
  };
}

export function onClickSequenceSaveAction(name) {
  return {
    type: CLICK_SEQ_SAVE,
    payload: name,
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

export function onClickLoadSequenceAction(login, password, seqName, sequences) {
  if (seqName === "") {
    return {
      type: EMPTY_SEQ_NAME_LOAD,
    };
  }

  const nameIndex = sequences.findIndex((seq) => {
    return seq.name === seqName;
  });

  if (nameIndex === -1) {
    return {
      type: NO_SEQ_NAME,
    };
  } else {
    return (dispatch) => {
      fetch("http://localhost/YSB/public/php/loadsequence.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          login: login,
          password: password,
          id: sequences[nameIndex].id,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          return dispatch({
            type: LOAD_SEQ,
            payload: {
              cards: result.cards,
              name: seqName,
              nextCardKey: result.cardKey,
              nextGridKey: result.gridKey,
            },
          });
        })
        .catch((error) => console.error(error));
    };
  }
}

export function onClickSaveSequenceAction(
  login,
  password,
  seqName,
  sequences,
  cards,
  rewriteSequenceAction
) {
  if (seqName === "") {
    return {
      type: EMPTY_SEQ_NAME_SAVE,
    };
  }

  const sameNameIndex = sequences.findIndex((seq) => {
    return seq.name === seqName;
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
          seqName: seqName,
          dateTime: dateTime,
          sequence: cards,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          return dispatch({
            type: SAVE_SUCCESS,
            payload: seqName,
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
          seqName,
          cards,
          sequences[sameNameIndex].id
        ),
    };
  }
}

export function rewriteSequenceAction(
  login,
  password,
  seqName,
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
        seqName: seqName,
        dateTime: dateTime,
        sequence: cards,
        id: deleteId,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return dispatch({
          type: REWRITE_SUCCESS,
          payload: seqName,
        });
      })
      .catch((error) => console.error(error));
  };
}
