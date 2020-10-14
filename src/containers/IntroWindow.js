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
import IntroSliderButtons from "../components/IntroSliderButtons";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

function IntroWindow(props) {
  const { isOpen, curSlide, texts, nextButtonText } = props.intro;
  const { curLang } = props.language;
  const { onCloseIntroWindow } = props;

  const classes = useStyles();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const closeIconButtonProps = {
    size: isSmallScreen ? "small" : undefined,
  };

  return (
    <Dialog open={isOpen} onClose={onCloseIntroWindow}>
      <IconButton
        {...closeIconButtonProps}
        className={classes.closeButton}
        onClick={onCloseIntroWindow}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle>{texts[curSlide][curLang].title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{texts[curSlide][curLang].text}</DialogContentText>
      </DialogContent>
      <IntroSliderButtons slidersNum={texts.length} curSlide={curSlide} />
      <DialogActions>
        <Button onClick={onCloseIntroWindow} color="secondary">
          {nextButtonText[curLang]}
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
