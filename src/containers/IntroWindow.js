import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { onCloseIntroWindow } from "../actions/IntroWindowActions";

function IntroWindow(props) {
  return (
    <Dialog open={props.intro.isOpen} onClose={props.onCloseIntroWindow}>
      <DialogTitle>
        {props.intro.texts[0][props.language.curLang].title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.intro.texts[0][props.language.curLang].text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCloseIntroWindow} color="secondary">
          {props.intro.nextButtonText[props.language.curLang]}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    intro: store.intro,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseIntroWindow: () => dispatch(onCloseIntroWindow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroWindow);
