import Cookies from "js-cookie";
export const CHANGE_LANG = "CHANGE_LANG";

export function onChangeLangChooser(e) {
  Cookies.set("lang", e.target.value, { expires: 365 });
  return {
    type: CHANGE_LANG,
    payload: e.target.value,
  };
}
