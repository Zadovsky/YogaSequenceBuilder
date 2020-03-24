import React from "react";
import { connect } from "react-redux";
import { onReadCookiesAction } from "../actions/ReadCookiesActions";

class ReadCookies extends React.Component {
  constructor(props) {
    super(props);
    props.onReadCookiesAction();
  }

  render() {
    return "";
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onReadCookiesAction: () => dispatch(onReadCookiesAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadCookies);
