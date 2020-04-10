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
import {
  closeSeqListAction,
  onChangeSaveNameAction,
  onClickDeleteSequenceAction,
  deleteSequenceAction,
  onClickSaveSequenceAction,
  rewriteSequenceAction,
} from "../actions/SequencesListActions";
import "./SequencesList.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    padding: theme.spacing(1, 2, 3),
  },
  closeList: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  button: {
    margin: theme.spacing(0, 0, 1, 1),
  },
  h3: {
    padding: "6px 0 7px",
  },
  list: {
    "& button": {
      opacity: 0,
    },
    "& :hover button": {
      opacity: "100%",
    },
  },
  displayNone: {
    display: "none",
  },
  listItemText: {
    padding: theme.spacing(0, 1, 0, 0),
  },
}));

function createListItemArr(
  sequences,
  onClickDeleteSequenceAction,
  login,
  password,
  classListItemText
) {
  if (sequences !== null) {
    return sequences.map((item) => (
      <ListItem key={item.id}>
        <ListItemText primary={item.name} />
        <ListItemText
          secondary={item.time}
          secondaryTypographyProps={{
            align: "right",
          }}
          className={classListItemText}
        />
        <IconButton
          onClick={() => onClickDeleteSequenceAction(login, password, item.id)}
        >
          <CloseIcon />
        </IconButton>
      </ListItem>
    ));
  } else return "";
}

function SequencesList(props) {
  const classes = useStyles();
  const classListItemText = classes.listItemText;
  const listItemArr = createListItemArr(
    props.sequences.sequences,
    props.onClickDeleteSequenceAction,
    props.user.login,
    props.user.password,
    classListItemText
  );
  const texts = props.sequences.texts[props.language.curLang];

  return (
    <div
      className={
        props.sequences.isOpen ? "sequencesListWrapper" : classes.displayNone
      }
    >
      <ClickAwayListener onClickAway={props.closeSeqListAction}>
        <Paper className={classes.paper} elevation={2}>
          <div className="SeqListFlexBox">
            <Typography variant="h5" component="h3" className={classes.h3}>
              {texts.saveHeader}
            </Typography>
            <div className="TextFieldButtonWrapper">
              <TextField
                fullWidth
                autoFocus
                value={props.sequences.saveName}
                inputProps={{
                  onChange: (e) => props.onChangeSaveNameAction(e),
                }}
              />
              <div className="ButtonWrapper">
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={() =>
                    props.onClickSaveSequenceAction(
                      props.user.login,
                      props.user.password,
                      props.sequences.saveName,
                      props.sequences.sequences,
                      props.schedule.cards,
                      props.rewriteSequenceAction
                    )
                  }
                >
                  {texts.saveButton}
                </Button>
              </div>
            </div>
            <div className="SeqListFlexElement">
              <List className={classes.list}>{listItemArr}</List>
            </div>
            <IconButton
              className={classes.closeList}
              onClick={props.closeSeqListAction}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </Paper>
      </ClickAwayListener>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    sequences: store.sequences,
    user: store.user,
    schedule: store.schedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSeqListAction: () => dispatch(closeSeqListAction()),
    onChangeSaveNameAction: (e) => dispatch(onChangeSaveNameAction(e)),
    onClickDeleteSequenceAction: (login, password, id) =>
      dispatch(
        onClickDeleteSequenceAction(() =>
          dispatch(deleteSequenceAction(login, password, id))
        )
      ),
    rewriteSequenceAction: (login, password, saveName, cards, deleteId) =>
      dispatch(
        rewriteSequenceAction(login, password, saveName, cards, deleteId)
      ),
    onClickSaveSequenceAction: (
      login,
      password,
      saveName,
      sequences,
      cards,
      rewriteSequenceAction
    ) =>
      dispatch(
        onClickSaveSequenceAction(
          login,
          password,
          saveName,
          sequences,
          cards,
          rewriteSequenceAction
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SequencesList);
