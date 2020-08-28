import React from "react";
import "./PanelName.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuButton: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PanelName(props) {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const styles = {
    resize: { fontSize: isSmallScreen ? undefined : "1.5rem" },
  };

  return (
    <div className="TextFieldIconWrapper">
      <TextField
        className={classes.textField}
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
        onClick={props.openMenu ? props.closeMenuAction : props.openMenuAction}
        className={classes.menuButton}
        size="small"
      >
        {props.openMenu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </div>
  );
}
