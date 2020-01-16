import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./PageTop.css";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function PageTop(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div>{props.pageTop.headerText[props.language]}</div>
    </Paper>
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    pageTop: store.pageTop
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTop);
