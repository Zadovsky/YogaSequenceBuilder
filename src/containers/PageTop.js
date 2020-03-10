import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Header from "../components/Header";
import { onChangeLangChooser } from "../actions/LanguageChooserActions";
import { onClickSignInAction } from "../actions/SignInRegButtonsActions";
import {
  userMenuClose,
  usernameClickAction,
  exitItemClickAction
} from "../actions/UserMenuActions";
import "./PageTop.css";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1, 0)
  },
  h1: {
    padding: theme.spacing(1, 2, 0)
  },
  instruction: {
    padding: theme.spacing(1, 2)
  }
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
        login={props.user.login}
        anchorEl={props.user.userMenu.anchorEl}
        isOpen={props.user.userMenu.isOpen}
        userMenuClose={props.userMenuClose}
        usernameClickAction={props.usernameClickAction}
        exitItemClickAction={props.exitItemClickAction}
        userMenuTexts={props.user.userMenuTexts[props.language.curLang]}
      />
      <Divider variant="middle" />
      <Typography
        variant="h4"
        component="h1"
        align="center"
        className={classes.h1}
      >
        {props.pageTop.headerText[props.language.curLang]}
      </Typography>
      <Typography variant="body1" className={classes.instruction}>
        {props.pageTop.instructionText[props.language.curLang]}
      </Typography>
    </Paper>
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    pageTop: store.pageTop,
    user: store.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLangChooser: e => dispatch(onChangeLangChooser(e)),
    onClickSignInAction: () => dispatch(onClickSignInAction()),
    userMenuClose: () => dispatch(userMenuClose()),
    usernameClickAction: e => dispatch(usernameClickAction(e)),
    exitItemClickAction: () => dispatch(exitItemClickAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTop);
