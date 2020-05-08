import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
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
    margin: theme.spacing(1, 0),
  },
  h1: {
    padding: theme.spacing(1, 2, 0),
  },
  h2: {},
  instruction: {
    padding: theme.spacing(1, 2),
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
        logoImg={props.pageTop.logoPath}
        logoText={props.pageTop.logoText}
        logoUrl={props.pageTop.logoUrl}
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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            className={classes.h2}
          >
            {props.pageTop.whatItIsText[props.language.curLang].title}
          </Typography>
          <Typography variant="body1" className={classes.instruction}>
            {props.pageTop.whatItIsText[props.language.curLang].text}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            className={classes.h2}
          >
            {props.pageTop.howItWorksText[props.language.curLang].title}
          </Typography>
          {props.pageTop.howItWorksText[props.language.curLang].texts.map(
            (text, i) => {
              return (
                <Typography
                  key={i}
                  variant="body1"
                  className={classes.instruction}
                >
                  {text}
                </Typography>
              );
            }
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    pageTop: store.pageTop,
    user: store.user,
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
