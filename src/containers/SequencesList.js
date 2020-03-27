import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { closeSeqListAction } from "../actions/SequencesListActions";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0
  }
}));

function createListItemArr(sequences) {
  if (sequences !== null) {
    return sequences.map(item => (
      <ListItem key={item.id}>
        <ListItemText primary={item.name} />
      </ListItem>
    ));
  } else return "";
}

function SequencesList(props) {
  const classes = useStyles();
  const listItemArr = createListItemArr(props.sequences.sequences);

  if (props.sequences.isOpen) {
    return (
      <Paper className={classes.paper} elevation={2}>
        <List>{listItemArr}</List>
        <IconButton
          className={classes.button}
          onClick={props.closeSeqListAction}
        >
          <CloseIcon />
        </IconButton>
      </Paper>
    );
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
  return {
    closeSeqListAction: () => dispatch(closeSeqListAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SequencesList);
