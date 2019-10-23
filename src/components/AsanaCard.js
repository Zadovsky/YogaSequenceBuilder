import React from "react";
import "./AsanaCard.css";

export default function AsanaCard(props) {
  var classArr = ["AsanaCard"];
  if (props.isDragging) classArr.push("AsanaCardDragging");
  const classStr = classArr.join(" ");

  return (
    <div
      className={classStr}
      onClick={props.addAsanaAction}
      onDragEnter={props.dragEnterAction}
      onDragLeave={props.dragLeaveAction}
      draggable="true"
      gridid={props.gridId}
      cardplace={props.cardPlace}
    >
      <div
        style={{
          backgroundImage: "url(" + props.img + ")",
          height: "200px"
        }}
      ></div>
      <p>{props.name}</p>
    </div>
  );
}
