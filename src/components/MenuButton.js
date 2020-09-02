import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  circleUnderMenuButton: {
    display: "flex",
    background: "white",
    opacity: "90%",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    position: "absolute",
    top: 0,
    right: 0,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuButton: {
    opacity: "100%",
  },
}));

export default function MenuButton(props) {
  const classes = useStyles();
  const { openMenu, closeMenuAction, openMenuAction } = props;

  return (
    <div className={classes.circleUnderMenuButton}>
      <IconButton
        onClick={openMenu ? closeMenuAction : openMenuAction}
        className={classes.menuButton}
        size="small"
      >
        {openMenu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </div>
  );
}
