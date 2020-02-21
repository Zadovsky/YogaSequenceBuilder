import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import {
  onClickCancelSignInAction,
  onClickSignInAction,
  onChangeEmailSignInAction,
  onChangePwdSignInAction
} from "../actions/SignInPopUpWindowActions";

function UserPopUpWindows(props) {
  return (
    <div className="UserPopUpWindows">
      <SignInPopUpWindow
        onClickCancelSignInAction={props.onClickCancelSignInAction}
        onClickSignInAction={props.onClickSignInAction}
        open={props.user.signIn.windowIsOpen}
        signInWindowTexts={props.user.signInWindowTexts[props.language.curLang]}
        onChangeEmailSignInAction={props.onChangeEmailSignInAction}
        onChangePwdSignInAction={props.onChangePwdSignInAction}
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
    onClickSignInAction: () => dispatch(onClickSignInAction()),
    onChangeEmailSignInAction: e => dispatch(onChangeEmailSignInAction(e)),
    onChangePwdSignInAction: e => dispatch(onChangePwdSignInAction(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
