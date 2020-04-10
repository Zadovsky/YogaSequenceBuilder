import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import ForgotPwdPopUpWindow from "../components/ForgotPwdPopUpWindow";
import RegPopUpWindow from "../components/RegPopUpWindow";
import {
  onClickCancelSignInAction,
  onClickSignInAction,
  onChangeEmailSignInAction,
  onChangePwdSignInAction,
  onClickForgotPwdAction,
} from "../actions/SignInPopUpWindowActions";
import {
  onClickCancelForgotPwdAction,
  onClickConfirmForgotPwdAction,
  onChangeEmailForgotPwdAction,
} from "../actions/ForgotPwdPopUpWindowActions";
import {
  onClickCancelRegAction,
  onChangeEmailRegAction,
  onClickConfirmRegAction,
} from "../actions/RegPopUpWindowActions";

function UserPopUpWindows(props) {
  return (
    <div className="UserPopUpWindows">
      <SignInPopUpWindow
        onClickCancelSignInAction={props.onClickCancelSignInAction}
        onClickSignInAction={() =>
          props.onClickSignInAction(
            props.pageTop.signIn.email,
            props.pageTop.signIn.password
          )
        }
        onClickForgotPwdAction={props.onClickForgotPwdAction}
        flags={props.pageTop.signIn}
        signInWindowTexts={
          props.pageTop.signInWindowTexts[props.language.curLang]
        }
        onChangeEmailSignInAction={props.onChangeEmailSignInAction}
        onChangePwdSignInAction={props.onChangePwdSignInAction}
      />
      <ForgotPwdPopUpWindow
        open={props.pageTop.forgotPwd.isOpen}
        lang={props.language.curLang}
        texts={props.pageTop.forgotPwdTexts[props.language.curLang]}
        emailIsEmpty={props.pageTop.forgotPwd.emailIsEmpty}
        onClickCancelAction={props.onClickCancelForgotPwdAction}
        onClickConfirmAction={() =>
          props.onClickConfirmForgotPwdAction(props.pageTop.forgotPwd.email)
        }
        onChangeEmailAction={props.onChangeEmailForgotPwdAction}
      />
      <RegPopUpWindow
        open={props.pageTop.registration.isOpen}
        lang={props.language.curLang}
        texts={props.pageTop.regTexts[props.language.curLang]}
        notEmail={props.pageTop.registration.notEmail}
        onClickCancelRegAction={props.onClickCancelRegAction}
        onChangeEmailRegAction={props.onChangeEmailRegAction}
        onClickConfirmRegAction={() =>
          props.onClickConfirmRegAction(props.pageTop.registration.email)
        }
      />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    pageTop: store.pageTop,
    language: store.language,
    infoPopUp: store.infoPopUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCancelSignInAction: () => dispatch(onClickCancelSignInAction()),
    onClickSignInAction: (email, password) =>
      dispatch(onClickSignInAction(email, password)),
    onChangeEmailSignInAction: (e) => dispatch(onChangeEmailSignInAction(e)),
    onChangePwdSignInAction: (e) => dispatch(onChangePwdSignInAction(e)),
    onClickForgotPwdAction: () => dispatch(onClickForgotPwdAction()),
    onClickCancelForgotPwdAction: () =>
      dispatch(onClickCancelForgotPwdAction()),
    onClickConfirmForgotPwdAction: (email) =>
      dispatch(onClickConfirmForgotPwdAction(email)),
    onChangeEmailForgotPwdAction: (e) =>
      dispatch(onChangeEmailForgotPwdAction(e)),
    onChangeEmailRegAction: (e) => dispatch(onChangeEmailRegAction(e)),
    onClickCancelRegAction: () => dispatch(onClickCancelRegAction()),
    onClickConfirmRegAction: (email) =>
      dispatch(onClickConfirmRegAction(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
