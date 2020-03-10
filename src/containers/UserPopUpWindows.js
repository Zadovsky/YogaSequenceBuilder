import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import InfoPopUpWindow from "../components/InfoPopUpWindow";
import YesNoPopUpWindow from "../components/YesNoPopUpWindow";
import {
  onClickCancelSignInAction,
  onClickSignInAction,
  onChangeEmailSignInAction,
  onChangePwdSignInAction
} from "../actions/SignInPopUpWindowActions";
import {
  onCloseLoginSuccessInfoAction,
  onCloseLoginFailedInfoAction
} from "../actions/InfoPopUpWindowActions";
import {
  onAcceptExitAction,
  onRefuseExitAction
} from "../actions/YesNoPopUpWindowActions";

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
        onCloseAction={props.onCloseLoginFailedInfoAction}
        lang={props.language.curLang}
      />
      <InfoPopUpWindow
        texts={props.user.loginSuccessWindowTexts[props.language.curLang]}
        open={props.user.signIn.loginSuccess}
        onCloseAction={props.onCloseLoginSuccessInfoAction}
        lang={props.language.curLang}
      />
      <YesNoPopUpWindow
        texts={props.user.sureToExitTexts[props.language.curLang]}
        open={props.user.sureToExitIsOpen}
        onAcceptExitAction={props.onAcceptExitAction}
        onRefuseExitAction={props.onRefuseExitAction}
        lang={props.language.curLang}
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
    onCloseLoginSuccessInfoAction: () =>
      dispatch(onCloseLoginSuccessInfoAction()),
    onCloseLoginFailedInfoAction: () =>
      dispatch(onCloseLoginFailedInfoAction()),
    onAcceptExitAction: () => dispatch(onAcceptExitAction()),
    onRefuseExitAction: () => dispatch(onRefuseExitAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
