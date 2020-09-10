import React from "react";
import { connect } from "react-redux";
import {
  endDrag,
  dragEnterCard,
  dragEnterGrid,
} from "../actions/DnDContextActions";
import "./DnDContext.css";

function DnDContext(props) {
  const { draggingCard, draggingGrid } = props.schedule;

  var onDragEnter = () => {};
  if (draggingCard !== null) {
    onDragEnter = props.onDragEnterCardAction;
  } else if (draggingGrid !== null) {
    onDragEnter = props.onDragEnterGridAction;
  }

  return (
    <div
      className="DnDContext"
      onDragEnd={props.endDragAction}
      onDragEnter={onDragEnter}
    >
      {props.children}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    schedule: store.schedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    endDragAction: (e) => dispatch(endDrag(e)),
    onDragEnterCardAction: (e) => dispatch(dragEnterCard(e)),
    onDragEnterGridAction: (e) => dispatch(dragEnterGrid(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DnDContext);
