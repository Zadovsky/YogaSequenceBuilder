import React from "react";
import "./AsanaCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  button: {
    position: "absolute",
    right: 0
  }
}));

export default function AsanaCard(props) {
  const classes = useStyles();

  var classArr = ["AsanaCard"];
  if (props.isDragging) classArr.push("AsanaCardDragging");
  const classStr = classArr.join(" ");

  return (
    <div
      className={classStr}
      onClick={props.addAsanaAction}
      onDragEnter={props.dragEnterAction}
      onDragStart={props.startCardDragAction}
      draggable="true"
    >
      <div className="AsanaCardInnerDiv">
        {props.dynamicPanel ? (
          <IconButton
            className={classes.button}
            onClick={props.closeCardAction}
          >
            <CloseIcon />
          </IconButton>
        ) : (
          ""
        )}
        <div
          style={{
            backgroundImage: "url(" + props.img + ")",
            height: "200px"
          }}
        ></div>
        <Typography variant="subtitle2" color="textPrimary" component="p">
          {props.name}
        </Typography>
      </div>
    </div>
  );
}
