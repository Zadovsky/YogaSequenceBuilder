import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const buttonText = {
  yes: {
    ru: "Да",
    en: "Yes"
  },
  no: {
    ru: "Нет",
    en: "No"
  }
};

export default function YesNoPopUpWindow(props) {
  return (
    <Dialog open={props.open} onClose={props.onRefuseExitAction}>
      <DialogTitle>{props.texts.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.texts.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onNoAction} color="primary">
          {buttonText.no[props.lang]}
        </Button>
        <Button onClick={props.onYesAction} color="primary">
          {buttonText.yes[props.lang]}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
