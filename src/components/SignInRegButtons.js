import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 1),
      marginBottom: "4px",
      padding: "2px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 4px 2px",
      fontSize: "0.6rem",
    },
  },
}));

export default function SignInRegButtons(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className="SignInRegButtons">
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={props.onClickSignInAction}
        size={useMediaQuery(theme.breakpoints.up("md")) ? "medium" : "small"}
      >
        {props.signInButtonText}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={props.onClickRegAction}
        size={useMediaQuery(theme.breakpoints.up("md")) ? "medium" : "small"}
      >
        {props.regButtonText}
      </Button>
    </div>
  );
}
