import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import "./SignInPopUpWindow.css";

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(2, 0, 0),
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
}));

export default function SignInPopUpWindow(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.flags.windowIsOpen}
      onClose={props.onClickCancelSignInAction}
    >
      <DialogTitle>{props.signInWindowTexts.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={props.signInWindowTexts.emailFieldLabel}
          type="email"
          fullWidth
          onChange={props.onChangeEmailSignInAction}
          error={props.flags.emailIsEmpty}
          helperText={
            props.flags.emailIsEmpty
              ? props.signInWindowTexts.emptyFieldMsg
              : " "
          }
        />
        <TextField
          margin="dense"
          label={props.signInWindowTexts.passwordLabel}
          type="password"
          fullWidth
          onChange={props.onChangePwdSignInAction}
          error={props.flags.pwdIsEmpty}
          helperText={
            props.flags.pwdIsEmpty ? props.signInWindowTexts.emptyFieldMsg : " "
          }
        />
        <Link
          component="button"
          variant="body2"
          onClick={props.onClickForgotPwdAction}
          className={classes.link}
        >
          {props.signInWindowTexts.forgotPwdText}
        </Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClickCancelSignInAction} color="primary">
          {props.signInWindowTexts.cancelText}
        </Button>
        <Button onClick={props.onClickSignInAction} color="primary">
          {props.signInWindowTexts.signInText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
