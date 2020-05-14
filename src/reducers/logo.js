const initialState = {
  logoPath: "/img/logo.png",
  logoText: "YogaSequenceBuilder.online",
  logoUrl: "localhost:3000",
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
