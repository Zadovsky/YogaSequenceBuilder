import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { closeSeqListAction } from "../actions/SequencesListActions";
import "./SequencesList.css";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    padding: theme.spacing(1, 2, 3)
  },
  closeList: {
    position: "absolute",
    right: 0,
    top: 0
  },
  button: {
    margin: theme.spacing(0, 0, 0, 1)
  },
  h3: {
    padding: "6px 0 7px"
  },
  list: {
    "& button": {
      opacity: 0
    },
    "& :hover button": {
      opacity: "100%"
    }
  },
  displayNone: {
    display: "none"
  }
}));

function createListItemArr(sequences) {
  if (sequences !== null) {
    return sequences.map(item => (
      <ListItem key={item.id}>
        <ListItemText primary={item.name} />
        <ListItemText secondary={item.time} />
        <IconButton>
          <CloseIcon />
        </IconButton>
      </ListItem>
    ));
  } else return "";
}

function SequencesList(props) {
  const classes = useStyles();
  const listItemArr = createListItemArr(props.sequences.sequences);

  return (
    <div
      className={
        props.sequences.isOpen ? "sequencesListWrapper" : classes.displayNone
      }
    >
      <ClickAwayListener onClickAway={props.closeSeqListAction}>
        <Paper className={classes.paper} elevation={2}>
          <Typography variant="h5" component="h3" className={classes.h3}>
            Сохранить
          </Typography>
          <div className="TextFieldButtonWrapper">
            <TextField
              fullWidth
              autoFocus
              value={props.sequences.saveName}
              // inputProps={{
              //   onChange: e => props.onChangePanelNameAction(e),
              // }}
            />
            <div className="ButtonWrapper">
              <Button variant="contained" className={classes.button}>
                Сохранить
              </Button>
            </div>
          </div>
          <List className={classes.list}>{listItemArr}</List>
          <IconButton
            className={classes.closeList}
            onClick={props.closeSeqListAction}
          >
            <CloseIcon />
          </IconButton>
        </Paper>
      </ClickAwayListener>
    </div>
  );
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
