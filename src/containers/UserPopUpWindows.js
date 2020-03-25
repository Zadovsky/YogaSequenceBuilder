import React from "react";
import { connect } from "react-redux";
import SignInPopUpWindow from "../components/SignInPopUpWindow";
import InfoPopUpWindow from "../components/InfoPopUpWindow";
import YesNoPopUpWindow from "../components/YesNoPopUpWindow";
import ForgotPwdPopUpWindow from "../components/ForgotPwdPopUpWindow";
import RegPopUpWindow from "../components/RegPopUpWindow";
import {
  onClickCancelSignInAction,
  onClickSignInAction,
  onChangeEmailSignInAction,
  onChangePwdSignInAction,
  onClickForgotPwdAction
} from "../actions/SignInPopUpWindowActions";
import { onCloseInfoPopUpAction } from "../actions/InfoPopUpWindowActions";
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
import { onClickCancelRegAction } from "../actions/RegPopUpWindowActions";

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
      <RegPopUpWindow
        open={props.user.registration.isOpen}
        lang={props.language.curLang}
        texts={props.user.regTexts[props.language.curLang]}
        onClickCancelRegAction={props.onClickCancelRegAction}
        onChangeEmailRegAction={() => {}}
        onClickConfirmRegAction={() => {}}
      />
      <InfoPopUpWindow
        open={props.user.infoPopUp.isOpen}
        texts={
          props.user.infoPopUp.isOpen
            ? props.user.infoPopUp.texts[props.language.curLang]
            : { title: "", text: "" }
        }
        onCloseAction={props.onCloseInfoPopUpAction}
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
    onConfirmExitAction: () => dispatch(onConfirmExitAction()),
    onRefuseExitAction: () => dispatch(onRefuseExitAction()),
    onConfirmChangePwdAction: (email, password) =>
      dispatch(onConfirmChangePwdAction(email, password)),
    onRefuseChangePwdAction: () => dispatch(onRefuseChangePwdAction()),
    onClickForgotPwdAction: () => dispatch(onClickForgotPwdAction()),
    onClickCancelForgotPwdAction: () =>
      dispatch(onClickCancelForgotPwdAction()),
    onClickConfirmForgotPwdAction: email =>
      dispatch(onClickConfirmForgotPwdAction(email)),
    onChangeEmailForgotPwdAction: e =>
      dispatch(onChangeEmailForgotPwdAction(e)),
    onCloseInfoPopUpAction: () => dispatch(onCloseInfoPopUpAction()),
    onClickCancelRegAction: () => dispatch(onClickCancelRegAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPopUpWindows);
