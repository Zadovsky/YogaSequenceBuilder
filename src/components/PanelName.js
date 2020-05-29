import React from "react";
import "./PanelName.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
  menuButton: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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
      <IconButton
        onClick={props.menuButtonAction}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}
