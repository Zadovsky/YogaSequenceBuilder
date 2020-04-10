import React from "react";
import "./SaveLoadPdfButtons.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SaveLoadPdfButtons(props) {
  const classes = useStyles();

  return (
    <div className="SaveLoadPdfButtons">
      <Button
        variant="contained"
        className={classes.button}
        onClick={props.onClickLoad}
      >
        {props.texts.load}
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        onClick={props.onClickSave}
      >
        {props.texts.save}
      </Button>
      <Button variant="contained" className={classes.button}>
        {props.texts.pdf}
      </Button>
    </div>
  );
}
