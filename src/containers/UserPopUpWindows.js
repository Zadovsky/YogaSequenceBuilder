import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";

function UserPopUpWindows(props) {
  if (props.user.signInWindowIsOpen) {
    return <SignInPopUpWindow />;
  } else return <div></div>;
}

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
