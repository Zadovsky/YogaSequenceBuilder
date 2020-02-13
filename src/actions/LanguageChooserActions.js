export const CHANGE_LANG = "CHANGE_LANG";

export function onChangeLangChooser(e) {
  return {
    type: CHANGE_LANG,
    payload: e.target.value
  };
}
