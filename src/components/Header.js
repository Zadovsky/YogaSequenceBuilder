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
  },
  p: {
    display: "inline",
    margin: theme.spacing(0, 0, 0, 2),
  },
  a: {
    textDecoration: "none",
  },
  logoImg: {
    height: "64px",
    width: "64px",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={4} className={classes.gridItem}>
        <a href={props.logoUrl} className={classes.a}>
          <img src={props.logoImg} alt="logo" className={classes.logoImg}></img>
        </a>
        <a href={props.logoUrl} className={classes.a}>
          <Typography
            variant="h5"
            component="p"
            className={classes.p}
            color="textPrimary"
          >
            {props.logoText}
          </Typography>
        </a>
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <LanguageChooser
          curLang={props.curLang}
          langList={props.langList}
          onChangeAction={props.onChangeAction}
        />
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
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
