import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { onCloseIntroWindow } from "../actions/IntroWindowActions";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

function IntroWindow(props) {
  const classes = useStyles();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const closeIconButtonProps = {
    size: isSmallScreen ? "small" : undefined,
  };

  return (
    <Dialog open={props.intro.isOpen} onClose={props.onCloseIntroWindow}>
      <IconButton
        {...closeIconButtonProps}
        className={classes.closeButton}
        onClick={props.onCloseIntroWindow}
      >
        <CloseIcon />
      </IconButton>
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
