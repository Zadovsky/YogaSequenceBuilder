export const CLOSE_SEQ_LIST = "CLOSE_SEQ_LIST";
export const CHANGE_SAVE_NAME = "CHANGE_SAVE_NAME";

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
