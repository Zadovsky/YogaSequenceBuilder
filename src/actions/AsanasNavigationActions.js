export const ON_CLICK_ASANAS_NAVIGATION = "ON_CLICK_ASANAS_NAVIGATION";

export function onClickAsanasNavigation(groupId) {
  return {
    type: ON_CLICK_ASANAS_NAVIGATION,
    payload: groupId
  };
}
