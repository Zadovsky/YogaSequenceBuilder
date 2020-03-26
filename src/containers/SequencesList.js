import React from "react";
import { connect } from "react-redux";

function SequencesList(props) {
  return <div></div>;
}

const mapStateToProps = store => {
  return {
    language: store.language,
    sequences: store.sequences
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SequencesList);
