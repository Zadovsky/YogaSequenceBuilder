import React from "react";
import LanguageChooser from "../components/LanguageChooser";
import SignInRegButtons from "../components/SignInRegButtons";
import UserMenu from "../components/UserMenu";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";

const useStyles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(0, 0, 1)
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <div className="langChooserWrapper">
          <div className="langChooserInnerWrap">
            <LanguageChooser
              curLang={props.curLang}
              langList={props.langList}
              onChangeAction={props.onChangeAction}
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "center" }}>
        {props.login === null ? (
          <SignInRegButtons
            signInButtonText={props.signInButtonText}
            regButtonText={props.regButtonText}
            onClickSignInAction={props.onClickSignInAction}
          />
        ) : (
          <UserMenu
            login={props.login}
            anchorEl={props.anchorEl}
            isOpen={props.isOpen}
            userMenuClose={props.userMenuClose}
            usernameClickAction={props.usernameClickAction}
            exitItemClickAction={props.exitItemClickAction}
            texts={props.userMenuTexts}
          />
        )}
      </Grid>
    </Grid>
  );
}
