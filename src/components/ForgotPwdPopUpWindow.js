import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

export default function ForgotPwdPopUpWindow(props) {
  return (
    <Dialog open={props.open} onClose={props.onClickCancelAction}>
      <DialogTitle>{props.texts.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={props.texts.emailFieldLabel}
          type="email"
          fullWidth
          onChange={props.onChangeEmailAction}
          error={props.emailIsEmpty}
          helperText={props.emailIsEmpty ? props.texts.emptyFieldMsg : " "}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClickCancelAction} color="primary">
          {props.texts.cancelText}
        </Button>
        <Button onClick={props.onClickConfirmAction} color="primary">
          {props.texts.confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
