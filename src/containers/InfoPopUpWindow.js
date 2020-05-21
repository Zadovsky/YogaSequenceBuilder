import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { onCloseInfoPopUpAction } from "../actions/InfoPopUpWindowActions";

const buttonText = {
  ok: {
    ru: "Ок",
    en: "Ok",
  },
};

function InfoPopUpWindow(props) {
  const texts = props.infoPopUp.isOpen
    ? props.infoPopUp.texts[props.language.curLang]
    : { title: "", text: "" };

  return (
    <Dialog
      open={props.infoPopUp.isOpen}
      onClose={props.onCloseInfoPopUpAction}
    >
      <DialogTitle>{texts.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{texts.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCloseInfoPopUpAction} color="secondary">
          {buttonText.ok[props.language.curLang]}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    infoPopUp: store.infoPopUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseInfoPopUpAction: () => dispatch(onCloseInfoPopUpAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPopUpWindow);
