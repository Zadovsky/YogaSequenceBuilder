import React from "react";
import LanguageChooser from "../components/LanguageChooser";
import SignInRegButtons from "../components/SignInRegButtons";
import UserMenu from "../components/UserMenu";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    backgroundColor: yellow[100],
  },
  gridItem: {
    padding: theme.spacing(1, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  p: {
    display: "inline",
    margin: theme.spacing(0, 0, 0, 2),
  },
  aText: {
    maxWidth: "85%",
    textDecoration: "none",
  },
  aLogo: {
    width: "15%",
    maxWidth: "64px",
    lineHeight: 0,
  },
  logoImg: {
    width: "100%",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item md={4} className={classes.gridItem}>
        <a href={props.logoUrl} className={classes.aLogo}>
          <img src={props.logoImg} alt="logo" className={classes.logoImg}></img>
        </a>
        <a href={props.logoUrl} className={classes.aText}>
          <Typography component="p" className={classes.p} color="textPrimary">
            {props.logoText}
          </Typography>
        </a>
      </Grid>
      <Grid item md={4} className={classes.gridItem}>
        <LanguageChooser
          curLang={props.curLang}
          langList={props.langList}
          onChangeAction={props.onChangeAction}
        />
      </Grid>
      <Grid item md={4} className={classes.gridItem}>
        {props.login === null ? (
          <SignInRegButtons
            signInButtonText={props.signInButtonText}
            regButtonText={props.regButtonText}
            onClickSignInAction={props.onClickSignInAction}
            onClickRegAction={props.onClickRegAction}
          />
        ) : (
          <UserMenu
            login={props.login}
            anchorEl={props.anchorEl}
            isOpen={props.isOpen}
            userMenuClose={props.userMenuClose}
            usernameClickAction={props.usernameClickAction}
            exitItemClickAction={props.exitItemClickAction}
            changePwdItemClickAction={props.changePwdItemClickAction}
            texts={props.userMenuTexts}
          />
        )}
      </Grid>
    </Grid>
  );
}
