import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function SignInRegButtons(props) {
  const classes = useStyles();

  return (
    <div className="SignInRegButtons">
      <Button variant="contained" className={classes.button}>
        Sign In
      </Button>
      <Button variant="contained" className={classes.button}>
        Registration
      </Button>
    </div>
  );
}
