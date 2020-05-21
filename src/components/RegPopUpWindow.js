import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import "./SignInPopUpWindow.css";

export default function RegPopUpWindow(props) {
  return (
    <Dialog open={props.open} onClose={props.onClickCancelRegAction}>
      <DialogTitle>{props.texts.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.texts.text}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label={props.texts.emailFieldLabel}
          type="email"
          fullWidth
          onChange={props.onChangeEmailRegAction}
          error={props.notEmail}
          helperText={props.notEmail ? props.texts.notEmailMsg : " "}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClickCancelRegAction} color="secondary">
          {props.texts.cancelText}
        </Button>
        <Button onClick={props.onClickConfirmRegAction} color="secondary">
          {props.texts.confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
