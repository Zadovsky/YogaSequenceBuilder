export const CLOSE_INTRO = "CLOSE_INTRO";
export const CHANGE_INTRO_SLIDE = "CHANGE_INTRO_SLIDE";

export function onCloseIntroWindow() {
  return {
    type: CLOSE_INTRO,
  };
}

export function onSliderButtonClickAction(slide) {
  return {
    type: CHANGE_INTRO_SLIDE,
    payload: slide,
  };
}
