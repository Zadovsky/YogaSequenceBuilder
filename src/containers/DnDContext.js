import React from "react";
import { connect } from "react-redux";
import { endDrag, dragEnter } from "../actions/DnDContextActions";

function DnDContext(props) {
  return (
    <div onDragEnd={props.endDragAction} onDragEnter={props.onDragEnterAction}>
      {props.children}
    </div>
  );
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    endDragAction: e => dispatch(endDrag(e)),
    onDragEnterAction: e => dispatch(dragEnter(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DnDContext);
