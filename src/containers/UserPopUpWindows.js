import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import { onClickCancelSignInAction } from "../actions/SignInPopUpWindowActions";

function UserPopUpWindows(props) {
  if (props.user.signInWindowIsOpen) {
    return (
      <SignInPopUpWindow
        onClickCancelSignInAction={props.onClickCancelSignInAction}
      />
    );
  } else return <div></div>;
}

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCancelSignInAction: () => dispatch(onClickCancelSignInAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
