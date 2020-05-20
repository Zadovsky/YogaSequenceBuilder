import React from "react";
import "./PanelName.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
}));

const styles = {
  resize: { fontSize: "1.5rem" },
};

export default function PanelName(props) {
  const classes = useStyles();
  return (
    <div className="TextFieldIconWrapper">
      <TextField
        className={classes.root}
        value={props.name}
        inputProps={{
          readOnly: props.readOnly,
          onChange: (e) => props.onChangePanelNameAction(e),
          onBlur: (e) => props.onBlurPanelNameAction(e),
          style: styles.resize,
        }}
      />
      {!props.readOnly && <EditIcon />}
    </div>
  );
}
