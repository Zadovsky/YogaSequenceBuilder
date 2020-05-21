import React from "react";
import "./SaveLoadPdfButtons.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  saveLoadPdfButtons: {
    margin: theme.spacing(1, -1, 2),
  },
}));

export default function SaveLoadPdfButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.saveLoadPdfButtons}>
      <Button
        variant="contained"
        color={props.readOnly ? "default" : "secondary"}
        className={classes.button}
        onClick={props.readOnly ? () => {} : props.onClickLoad}
      >
        {props.texts.load}
      </Button>
      <Button
        variant="contained"
        color={props.readOnly ? "default" : "secondary"}
        className={classes.button}
        onClick={props.readOnly ? () => {} : props.onClickSave}
      >
        {props.texts.save}
      </Button>
      <Button
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
