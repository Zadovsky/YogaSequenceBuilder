import React from "react";
import "./PanelName.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 2)
  }
}));

const styles = {
  resize: { fontSize: "1.5rem" }
};

export default function PanelName(props) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      value={props.name}
      inputProps={{
        readOnly: props.readOnly,
        onChange: e => props.onChangePanelNameAction(e),
        style: styles.resize
      }}
    />
  );
}
