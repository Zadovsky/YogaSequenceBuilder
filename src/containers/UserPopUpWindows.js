import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import { onClickCancelSignInAction } from "../actions/SignInPopUpWindowActions";

function UserPopUpWindows(props) {
  return (
    <div className="UserPopUpWindows">
      <SignInPopUpWindow
        onClickCancelSignInAction={props.onClickCancelSignInAction}
        open={props.user.signInWindowIsOpen}
        signInWindowTexts={props.user.signInWindowTexts[props.language.curLang]}
      />
    </div>
  );
}

const mapStateToProps = store => {
  return {
    user: store.user,
    language: store.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCancelSignInAction: () => dispatch(onClickCancelSignInAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
