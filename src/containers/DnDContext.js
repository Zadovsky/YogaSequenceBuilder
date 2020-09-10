import React from "react";
import { connect } from "react-redux";
import {
  endDragCard,
  endDragGrid,
  dragEnterCard,
  dragEnterGrid,
} from "../actions/DnDContextActions";
import "./DnDContext.css";

function DnDContext(props) {
  const { draggingCard, draggingGrid } = props.schedule;

  var onDragEnter = () => {};
  var onDragEnd = () => {};
  if (draggingCard !== null) {
    onDragEnter = props.onDragEnterCardAction;
    onDragEnd = props.onDragEndCardAction;
  } else if (draggingGrid !== null) {
    onDragEnter = props.onDragEnterGridAction;
    onDragEnd = props.onDragEndGridAction;
  }

  return (
    <div className="DnDContext" onDragEnd={onDragEnd} onDragEnter={onDragEnter}>
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
    onDragEndCardAction: () => dispatch(endDragCard()),
    onDragEndGridAction: () => dispatch(endDragGrid()),
    onDragEnterCardAction: (e) => dispatch(dragEnterCard(e)),
    onDragEnterGridAction: (e) => dispatch(dragEnterGrid(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DnDContext);
