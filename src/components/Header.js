import React from "react";
import LanguageChooser from "../components/LanguageChooser";
import SignInRegButtons from "../components/SignInRegButtons";
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
        <SignInRegButtons
          signInButtonText={props.signInButtonText}
          regButtonText={props.regButtonText}
          onClickSignInAction={props.onClickSignInAction}
        />
      </Grid>
    </Grid>
  );
}
