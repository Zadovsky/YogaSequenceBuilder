const initialState = {
  logoPath: "/img/logo.png",
  logoText: "YogaSequenceBuilder.online",
  logoUrl: "https://yogasequencebuilder.online/",
  footerText: "Copyright © 2019",
  footerLinkText: "Zadovsky",
  footerLinkUrl: "https://github.com/Zadovsky",
};

export function logoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
