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
  },
  signInButtonText: {
    ru: "ВХОД",
    en: "SIGN IN"
  },
  regButtonText: {
    ru: "РЕГИСТРАЦИЯ",
    en: "REGISTRATION"
  }
};

export function pageTopReducer(state = initialState, action) {
  return state;
}
