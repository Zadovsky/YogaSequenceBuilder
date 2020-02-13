import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import LanguageChooser from "../components/LanguageChooser";
import { onChangeLangChooser } from "../actions/LanguageChooserActions";
import "./PageTop.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0)
  },
  instruction: {
    padding: theme.spacing(1, 2)
  }
}));

function PageTop(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <LanguageChooser
        language={props.language.curLang}
        langList={props.language.langList}
        onChangeAction={props.onChangeLangChooser}
      />
      <Divider variant="middle" />
      <Typography variant="h4" component="h1" align="center">
        {props.pageTop.headerText[props.language.curLang]}
      </Typography>
      <Typography variant="body1" className={classes.instruction}>
        {props.pageTop.instructionText[props.language.curLang]}
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
  return {
    onChangeLangChooser: e => dispatch(onChangeLangChooser(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTop);
