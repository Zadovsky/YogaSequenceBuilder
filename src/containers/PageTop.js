import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./PageTop.css";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function PageTop(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h1" align="center">
        {props.pageTop.headerText[props.language]}
      </Typography>
      <Typography variant="body1">
        {props.pageTop.instructionText[props.language]}
      </Typography>
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
