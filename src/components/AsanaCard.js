import React from "react";
import "./AsanaCard.css";
import Typography from "@material-ui/core/Typography";

export default function AsanaCard(props) {
  var classArr = ["AsanaCard"];
  if (props.isDragging) classArr.push("AsanaCardDragging");
  const classStr = classArr.join(" ");

  return (
    <div
      className={classStr}
      onClick={props.addAsanaAction}
      onDragEnter={props.dragEnterAction}
      onDragStart={props.startDragAction}
      draggable="true"
    >
      <div className="AsanaCardInnerDiv">
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
