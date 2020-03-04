import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default function InfoPopUpWindow(props) {
  return (
    <Dialog open={props.open} onClose={props.onCloseAction}>
      <DialogTitle>{props.texts.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.texts.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCloseAction} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
