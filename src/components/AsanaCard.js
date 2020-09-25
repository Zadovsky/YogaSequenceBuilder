import React from "react";
import "./AsanaCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import { ActiveListener } from "react-event-injector";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
    right: 0,
    top: 0,
    [theme.breakpoints.down("sm")]: {
      opacity: "70% !important",
    },
  },
  asanaCardInnerDiv: {
    position: "relative",
    width: "90%",
    height: "90%",
    marginTop: "5%",
    borderRadius: " 4px",
    boxShadow:
      "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
    margin: "auto",
    backgroundColor: "white",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "96%",
      marginTop: "2%",
    },
    "& .MuiButtonBase-root": {
      opacity: 0,
      transition: "200ms",
    },
    "& .MuiButtonBase-root:hover": {
      opacity: "100%",
      transition: "200ms",
    },
  },
  сardTypography: {
    textAlign: "center",
    userSelect: "none",
    height: "90px",
    paddingTop: theme.spacing(1),
    width: "90%",
    margin: "auto",
    wordWrap: "break-word",
    [theme.breakpoints.only("md")]: {
      fontSize: "0.65rem",
      height: "70px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.49rem",
      height: "60px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.45rem",
      height: "50px",
    },
  },
}));

export default function AsanaCard(props) {
  const classes = useStyles();
  const classStr = clsx("AsanaCard", props.isDragging && "AsanaCardDragging");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const iconButtonProps = {
    size: isSmallScreen ? "small" : undefined,
  };
  const iconProps = {
    fontSize: isSmallScreen ? "small" : undefined,
  };

  return (
    <div
      className={classStr}
      data-cardplace={props.cardPlace}
      data-gridid={props.gridId}
      data-itisschedulepanel={props.itIsSchedulePanel}
    >
      <ActiveListener
        onTouchMove={(e) => props.touchMoveAction(e, props.ghostBlock)}
      >
        <div
          className={classes.asanaCardInnerDiv}
          onClick={props.addAsanaAction}
          onDragEnter={props.dragEnterAction}
          onDragStart={props.startCardDragAction}
          onTouchStart={props.touchStartAction}
          onTouchEnd={props.touchEndAction}
          draggable="true"
        >
          <div className="AsanaCardImgWrapper">
            <div
              className="AsanaCardImg"
              style={{
                backgroundImage: "url(" + props.img + ")",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          {props.itIsSchedulePanel ? (
            <IconButton
              {...iconButtonProps}
              className={classes.button}
              onClick={props.closeCardAction}
            >
              <CloseIcon {...iconProps} />
            </IconButton>
          ) : (
            ""
          )}
          <Divider variant="middle" />
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.сardTypography}
          >
            {props.name}
          </Typography>
        </div>
      </ActiveListener>
    </div>
  );
}
