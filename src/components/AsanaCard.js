import React from "react";
import "./AsanaCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
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
  сardTypography: {
    textAlign: "center",
    userSelect: "none",
    height: "90px",
    paddingTop: "8px",
    width: "90%",
    margin: "auto",
    wordWrap: "break-word",
    [theme.breakpoints.only("md")]: {
      fontSize: "0.65rem",
      height: "70px",
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

  return (
    <div className={classStr}>
      <div
        className="AsanaCardInnerDiv"
        onClick={props.addAsanaAction}
        onDragEnter={props.dragEnterAction}
        onDragStart={props.startCardDragAction}
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
            className={classes.button}
            onClick={props.closeCardAction}
          >
            <CloseIcon />
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
    </div>
  );
}
