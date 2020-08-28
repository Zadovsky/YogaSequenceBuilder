import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  buttonsPanelWrapper: {
    [theme.breakpoints.down("sm")]: {
      maxHeight: 0,
      transition: "max-height 500ms, visibility 0ms 500ms",
      visibility: "hidden",
      paddingRight: theme.spacing(6),
    },
    position: "relative",
  },
  buttonsPanelVisible: {
    maxHeight: "500px",
    transition: "max-height 500ms",
    visibility: "visible",
  },
  upArrowButton: {
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
    },
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export default function ButtonsPanelBlock(props) {
  const classes = useStyles();

  return (
    <ClickAwayListener
      onClickAway={props.closeMenuAction}
      mouseEvent={props.openMenu ? "onClick" : false}
      touchEvent={props.isOpen ? "onTouchEnd" : false}
    >
      <div
        className={clsx(
          classes.buttonsPanelWrapper,
          props.openMenu && classes.buttonsPanelVisible
        )}
      >
        {props.buttonsPanel}
        <IconButton
          className={classes.upArrowButton}
          onClick={props.closeMenuAction}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
    </ClickAwayListener>
  );
}
