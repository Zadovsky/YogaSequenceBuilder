import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { onCloseYesNoPopUpAction } from "../actions/YesNoPopUpWindowActions";

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

function YesNoPopUpWindow(props) {
  const texts = props.yesNoPopUp.isOpen
    ? props.yesNoPopUp.texts[props.language.curLang]
    : { title: "", text: "" };

  return (
    <Dialog
      open={props.yesNoPopUp.isOpen}
      onClose={props.onCloseYesNoPopUpAction}
    >
      <DialogTitle>{texts.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{texts.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCloseYesNoPopUpAction} color="primary">
          {buttonText.no[props.language.curLang]}
        </Button>
        <Button onClick={props.yesNoPopUp.yesAction} color="primary">
          {buttonText.yes[props.language.curLang]}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    yesNoPopUp: store.yesNoPopUp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseYesNoPopUpAction: () => dispatch(onCloseYesNoPopUpAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YesNoPopUpWindow);
