const initialState = {
  logoPath: "/img/logo.png",
  logoText: "YogaSequenceBuilder.online",
  logoUrl: "https://yogasequencebuilder.online/",
  footerText: "",
  footerLinkText: "GitHub",
  footerLinkUrl: "https://github.com/Zadovsky/YSB",
};

export function logoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
