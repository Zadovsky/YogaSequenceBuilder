import React from "react";
import "./GridPlaceHolder.css";

function makeTransitionStyle(fast, DragEnd) {
  if (fast) {
    if (DragEnd) {
      return { transition: "all 0s ease 0ms" };
    } else {
      return { transition: "all 0s ease 10ms" };
    }
  } else {
    return { transition: "all 300ms ease 0ms" };
  }
}

export default function GridPlaceHolder(props) {
  var transitionStyle = makeTransitionStyle(
    props.fastTransition,
    props.isDragEnd
  );
  transitionStyle.height = props.height;

  return (
    <div
      className="GridPlaceHolder"
      style={transitionStyle}
      onDragEnter={props.onDragEnterGridPhAction}
    ></div>
  );
}
