import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  }
}));

function SequencesList(props) {
  const classes = useStyles();

  if (props.sequences.isOpen) {
    return <Paper className={classes.paper} elevation={2}></Paper>;
  } else {
    return "";
  }
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
