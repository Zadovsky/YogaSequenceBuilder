import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGridBlock from "../components/AsanasGridBlock";
import {
  addAsanaAction,
  dragEnterAction,
  startDragAction,
  closeCardAction
} from "../actions/AsanaCardActions";
import { onDragEnterHolder } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function SchedulePanel(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <AsanasGridBlock
        cards={props.schedule.cards}
        dragging={props.schedule.dragging}
        dragOver={props.schedule.dragOver}
        dragOverGrid={props.schedule.dragOverGrid}
        fastTransition={props.schedule.fastTransition}
        dragSource={props.schedule.dragSource}
        language={props.language}
        asanas={props.asanas.arr}
        removableCards={true}
        startDragAction={props.startDragAction}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        closeCardAction={props.closeCardAction}
      />
    </Paper>
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    asanas: store.asanas,
    schedule: store.schedule
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startDragAction: (asanaId, gridId) =>
      dispatch(startDragAction(asanaId, gridId)),
    addAsanaAction: (asanaId, gridId, e) =>
      dispatch(addAsanaAction(asanaId, gridId, e)),
    closeCardAction: (cardIndex, gridId) =>
      dispatch(closeCardAction(cardIndex, gridId)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
