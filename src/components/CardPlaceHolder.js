import React from "react";
import clsx from "clsx";
import "./CardPlaceHolder.css";

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

export default function CardPlaceHolder(props) {
  const classStr = clsx("CardPlaceHolder", props.fat && "PlaceHolderFat");

  const transitionStyle = makeTransitionStyle(
    props.fastTransition,
    props.isDragEnd
  );

  return (
    <div
      className={classStr}
      onDragEnter={props.onDragEnterHolderAction}
      style={transitionStyle}
    ></div>
  );
}
