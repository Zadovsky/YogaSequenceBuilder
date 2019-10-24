import React from "react";
import "./EmptySpaceAtTheEnd.css";

export default function EmptySpaceAtTheEnd(props) {
  return <div className="EmptySpaceAtTheEnd" onDragEnter={props.onDragEnterEmptySpace}></div>;
}
