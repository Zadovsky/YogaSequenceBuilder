import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import InfoPopUpWindow from "../components/InfoPopUpWindow";
import YesNoPopUpWindow from "../components/YesNoPopUpWindow";
import ForgotPwdPopUpWindow from "../components/ForgotPwdPopUpWindow";
import {
  onClickCancelSignInAction,
  onClickSignInAction,
  onChangeEmailSignInAction,
  onChangePwdSignInAction,
  onClickForgotPwdAction
} from "../actions/SignInPopUpWindowActions";
import {
  onCloseLoginSuccessInfoAction,
  onCloseLoginFailedInfoAction,
  onClosePwdChangedInfoAction,
  onClosePwdSentInfoAction,
  onCloseNoLoginInfoAction
} from "../actions/InfoPopUpWindowActions";
import {
  onConfirmExitAction,
  onRefuseExitAction,
  onConfirmChangePwdAction,
  onRefuseChangePwdAction
} from "../actions/YesNoPopUpWindowActions";
import {
  onClickCancelForgotPwdAction,
  onClickConfirmForgotPwdAction,
  onChangeEmailForgotPwdAction
} from "../actions/ForgotPwdPopUpWindowActions";

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
        onClickForgotPwdAction={props.onClickForgotPwdAction}
        flags={props.user.signIn}
        signInWindowTexts={props.user.signInWindowTexts[props.language.curLang]}
        onChangeEmailSignInAction={props.onChangeEmailSignInAction}
        onChangePwdSignInAction={props.onChangePwdSignInAction}
      />
      <ForgotPwdPopUpWindow
        open={props.user.forgotPwd.isOpen}
        lang={props.language.curLang}
        texts={props.user.forgotPwdTexts[props.language.curLang]}
        emailIsEmpty={props.user.forgotPwd.emailIsEmpty}
        onClickCancelAction={props.onClickCancelForgotPwdAction}
        onClickConfirmAction={() =>
          props.onClickConfirmForgotPwdAction(props.user.forgotPwd.email)
        }
        onChangeEmailAction={props.onChangeEmailForgotPwdAction}
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
      <InfoPopUpWindow
        texts={props.user.pwdChangedTexts[props.language.curLang]}
        open={props.user.pwdChangedInfoIsOpen}
        onCloseAction={props.onClosePwdChangedInfoAction}
        lang={props.language.curLang}
      />
      <InfoPopUpWindow
        texts={props.user.forgotPwdTexts[props.language.curLang].pwdSent}
        open={props.user.forgotPwd.pwdSent}
        onCloseAction={props.onClosePwdSentInfoAction}
        lang={props.language.curLang}
      />
      <InfoPopUpWindow
        texts={props.user.forgotPwdTexts[props.language.curLang].noLogin}
        open={props.user.forgotPwd.noLogin}
        onCloseAction={props.onCloseNoLoginInfoAction}
        lang={props.language.curLang}
      />
      <YesNoPopUpWindow
        texts={props.user.sureToExitTexts[props.language.curLang]}
        open={props.user.sureToExitIsOpen}
        onYesAction={props.onConfirmExitAction}
        onNoAction={props.onRefuseExitAction}
        lang={props.language.curLang}
      />
      <YesNoPopUpWindow
        texts={props.user.sureToChangePwdTexts[props.language.curLang]}
        open={props.user.sureToChangePwdIsOpen}
        onYesAction={() =>
          props.onConfirmChangePwdAction(props.user.login, props.user.password)
        }
        onNoAction={props.onRefuseChangePwdAction}
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
    onConfirmExitAction: () => dispatch(onConfirmExitAction()),
    onRefuseExitAction: () => dispatch(onRefuseExitAction()),
    onConfirmChangePwdAction: (email, password) =>
      dispatch(onConfirmChangePwdAction(email, password)),
    onRefuseChangePwdAction: () => dispatch(onRefuseChangePwdAction()),
    onClosePwdChangedInfoAction: () => dispatch(onClosePwdChangedInfoAction()),
    onClickForgotPwdAction: () => dispatch(onClickForgotPwdAction()),
    onClickCancelForgotPwdAction: () =>
      dispatch(onClickCancelForgotPwdAction()),
    onClickConfirmForgotPwdAction: email =>
      dispatch(onClickConfirmForgotPwdAction(email)),
    onChangeEmailForgotPwdAction: e =>
      dispatch(onChangeEmailForgotPwdAction(e)),
    onClosePwdSentInfoAction: () => dispatch(onClosePwdSentInfoAction()),
    onCloseNoLoginInfoAction: () => dispatch(onCloseNoLoginInfoAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
