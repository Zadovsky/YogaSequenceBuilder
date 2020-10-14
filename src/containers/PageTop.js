import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "../components/Header";
import { onChangeLangChooser } from "../actions/LanguageChooserActions";
import {
  onClickSignInAction,
  onClickRegAction,
} from "../actions/SignInRegButtonsActions";
import {
  userMenuClose,
  usernameClickAction,
  exitItemClickAction,
  changePwdItemClickAction,
} from "../actions/UserMenuActions";
import "./PageTop.css";
import {
  onConfirmExitAction,
  onConfirmChangePwdAction,
} from "../actions/YesNoPopUpWindowActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(1, 0),
    },
  },
}));

function PageTop(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Header
        curLang={props.language.curLang}
        langList={props.language.langList}
        onChangeAction={props.onChangeLangChooser}
        signInButtonText={
          props.pageTop.signInButtonText[props.language.curLang]
        }
        regButtonText={props.pageTop.regButtonText[props.language.curLang]}
        onClickSignInAction={props.onClickSignInAction}
        onClickRegAction={props.onClickRegAction}
        login={props.user.login}
        anchorEl={props.pageTop.userMenu.anchorEl}
        isOpen={props.pageTop.userMenu.isOpen}
        userMenuClose={props.userMenuClose}
        usernameClickAction={props.usernameClickAction}
        exitItemClickAction={props.exitItemClickAction}
        changePwdItemClickAction={() =>
          props.changePwdItemClickAction(props.user.login, props.user.password)
        }
        userMenuTexts={props.pageTop.userMenuTexts[props.language.curLang]}
        logoImg={props.logo.logoPath}
        logoText={props.logo.logoText}
        logoUrl={props.logo.logoUrl}
      />
    </Paper>
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    pageTop: store.pageTop,
    user: store.user,
    logo: store.logo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLangChooser: (e) => dispatch(onChangeLangChooser(e)),
    onClickSignInAction: () => dispatch(onClickSignInAction()),
    onClickRegAction: () => dispatch(onClickRegAction()),
    userMenuClose: () => dispatch(userMenuClose()),
    usernameClickAction: (e) => dispatch(usernameClickAction(e)),
    exitItemClickAction: () =>
      dispatch(exitItemClickAction(() => dispatch(onConfirmExitAction()))),
    changePwdItemClickAction: (email, password) =>
      dispatch(
        changePwdItemClickAction(() =>
          dispatch(onConfirmChangePwdAction(email, password))
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTop);
