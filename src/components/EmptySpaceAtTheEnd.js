import React from "react";
import "./EmptySpaceAtTheEnd.css";

export default function EmptySpaceAtTheEnd(props) {
  const onDragOverFunc = props.removableCards
    ? e => {
        e.preventDefault();
      }
    : () => {};

  return (
    <div
      className="EmptySpaceAtTheEnd"
      onDragEnter={props.onDragEnterEmptySpace}
      onDragOver={onDragOverFunc}
    ></div>
  );
}
