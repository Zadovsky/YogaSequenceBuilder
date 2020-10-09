import React from "react";
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
import Slide from "@material-ui/core/Slide";
import "./SequencesListSpace.css";

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
      transition: "200ms",
      [theme.breakpoints.down("sm")]: {
        opacity: "100%",
      },
    },
    "& :hover button": {
      opacity: "100%",
      transition: "200ms",
    },
  },
  listItemText: {
    padding: theme.spacing(0, 1, 0, 0),
  },
}));

function createListItemArr(
  sequences,
  onClickSequenceAction,
  onClickDeleteSequenceAction,
  login,
  password,
  classListItemText
) {
  if (sequences !== null) {
    return sequences.map((item) => (
      <ListItem
        key={item.id}
        button
        onClick={() =>
          onClickSequenceAction(item.name, item.id, login, password)
        }
      >
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
  } else return null;
}

export default function SequencesListSpace(props) {
  const classes = useStyles();
  const classListItemText = classes.listItemText;
  const listItemArr = createListItemArr(
    props.sequences,
    props.onClickSequenceAction,
    props.onClickDeleteSequenceAction,
    props.login,
    props.password,
    classListItemText
  );

  return (
    <ClickAwayListener
      onClickAway={props.closeSeqListAction}
      mouseEvent={props.isOpen ? "onClick" : false}
      touchEvent={false}
    >
      <Slide direction="right" in={props.isOpen}>
        <Paper className={classes.paper} elevation={2}>
          <div className="SeqListFlexBox">
            <Typography variant="h5" component="h3" className={classes.h3}>
              {props.texts.header}
            </Typography>
            <div className="TextFieldButtonWrapper">
              <TextField
                fullWidth
                autoFocus
                value={props.seqName}
                inputProps={{
                  onChange: (e) => props.onChangeSeqNameAction(e),
                }}
              />
              <div className="ButtonWrapper">
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={props.onClickMainButtonSeqListAction}
                  color="secondary"
                >
                  {props.texts.button}
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
      </Slide>
    </ClickAwayListener>
  );
}
