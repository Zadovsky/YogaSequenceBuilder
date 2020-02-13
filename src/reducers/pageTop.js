const initialState = {
  headerText: {
    ru: "Конструктор комплексов асан хатха-йоги",
    en: "Yoga Sequence Builder"
  },
  instructionText: {
    ru:
      "Перетаскивай карточки из списка асан (слева) в панель конструктора (справа)",
    en:
      "Just drug'n'drop asanas from asanas list (left) to sequence panel (right)"
  }
};

export function pageTopReducer(state = initialState, action) {
  return state;
}
