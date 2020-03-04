import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import InfoPopUpWindow from "../components/InfoPopUpWindow";
import {
  onClickCancelSignInAction,
  onClickSignInAction,
  onChangeEmailSignInAction,
  onChangePwdSignInAction
} from "../actions/SignInPopUpWindowActions";
import { onCloseInfoAction } from "../actions/InfoPopUpWindowActions";

function UserPopUpWindows(props) {
  return (
    <div className="UserPopUpWindows">
      <SignInPopUpWindow
        onClickCancelSignInAction={props.onClickCancelSignInAction}
        onClickSignInAction={() =>
          props.onClickSignInAction(
            props.user.signIn.email,
            props.user.signIn.password
          )
        }
        flags={props.user.signIn}
        signInWindowTexts={props.user.signInWindowTexts[props.language.curLang]}
        onChangeEmailSignInAction={props.onChangeEmailSignInAction}
        onChangePwdSignInAction={props.onChangePwdSignInAction}
      />
      <InfoPopUpWindow
        texts={props.user.loginFailedWindowTexts[props.language.curLang]}
        open={props.user.signIn.loginFailed}
        onCloseAction={props.onCloseInfoAction}
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
    onClickSignInAction: (email, password) =>
      dispatch(onClickSignInAction(email, password)),
    onChangeEmailSignInAction: e => dispatch(onChangeEmailSignInAction(e)),
    onChangePwdSignInAction: e => dispatch(onChangePwdSignInAction(e)),
    onCloseInfoAction: () => dispatch(onCloseInfoAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
