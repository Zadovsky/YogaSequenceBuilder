import React from "react";
import { connect } from "react-redux";
import { onCheckLangAction } from "../actions/CheckLangActions";

class CheckLang extends React.Component {
  constructor(props) {
    super(props);
    props.onCheckLangAction();
  }

  render() {
    return null;
  }
}

const mapStateToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckLangAction: () => dispatch(onCheckLangAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckLang);
