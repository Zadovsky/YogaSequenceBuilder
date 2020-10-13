import React from "react";
import { connect } from "react-redux";

function IntroWindow(props) {
  return;
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    //   intro: store.intro,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroWindow);
