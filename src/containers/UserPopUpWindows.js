import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import {
  onClickCancelSignInAction,
  onClickSignInAction
} from "../actions/SignInPopUpWindowActions";

function UserPopUpWindows(props) {
  return (
    <div className="UserPopUpWindows">
      <SignInPopUpWindow
        onClickCancelSignInAction={props.onClickCancelSignInAction}
        onClickSignInAction={props.onClickSignInAction}
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
    onClickCancelSignInAction: () => dispatch(onClickCancelSignInAction()),
    onClickSignInAction: () => dispatch(onClickSignInAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
