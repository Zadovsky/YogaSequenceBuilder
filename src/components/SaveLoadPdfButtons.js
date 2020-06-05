import React from "react";
import "./SaveLoadPdfButtons.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.only("xs")]: { margin: theme.spacing(0.5) },
  },
  saveLoadPdfButtons: {
    margin: theme.spacing(1, -1, 0),
    [theme.breakpoints.only("xs")]: { margin: theme.spacing(1, -0.5, 0) },
  },
}));

export default function SaveLoadPdfButtons(props) {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const buttonProps = {
    size: isSmallScreen ? "small" : undefined,
  };

  return (
    <div className={classes.saveLoadPdfButtons}>
      <Button
        {...buttonProps}
        variant="contained"
        color={props.readOnly ? "default" : "secondary"}
        className={classes.button}
        onClick={props.readOnly ? () => {} : props.onClickLoad}
      >
        {props.texts.load}
      </Button>
      <Button
        {...buttonProps}
        variant="contained"
        color={props.readOnly ? "default" : "secondary"}
        className={classes.button}
        onClick={props.readOnly ? () => {} : props.onClickSave}
      >
        {props.texts.save}
      </Button>
      <Button
        {...buttonProps}
        variant="contained"
        color={props.readOnly ? "default" : "secondary"}
        className={classes.button}
        onClick={props.readOnly ? () => {} : props.onClickPdf}
      >
        {props.texts.pdf}
      </Button>
    </div>
  );
}
