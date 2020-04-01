export const CLOSE_SEQ_LIST = "CLOSE_SEQ_LIST";
export const CHANGE_SAVE_NAME = "CHANGE_SAVE_NAME";
export const DELETE_SEQ = "DELETE_SEQ";

export function closeSeqListAction() {
  return {
    type: CLOSE_SEQ_LIST
  };
}

export function onChangeSaveNameAction(e) {
  return {
    type: CHANGE_SAVE_NAME,
    payload: e.target.value
  };
}

export function deleteSequenceAction(id, name) {
  return {
    type: DELETE_SEQ,
    payload: {
      id: id,
      name: name
    }
  };
}
