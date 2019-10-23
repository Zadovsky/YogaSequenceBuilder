import React from "react";
import { connect } from "react-redux";
import { startDrag, endDrag } from "../actions/DnDContextActions";

function DnDContext(props) {
  return (
    <div
      onDragStart={props.startDragAction}
      onDragEnd={props.endDragAction}
    >
      {props.children}
    </div>
  );
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    startDragAction: e => dispatch(startDrag(e)),
    endDragAction: e => dispatch(endDrag(e)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DnDContext);
