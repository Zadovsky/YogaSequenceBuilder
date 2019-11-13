import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGrid from "../components/AsanasGrid";
import ScheduleSectionsSeparator from "../components/ScheduleSectionsSeparator";
import {
  addAsanaAction,
  dragEnterAction,
  startDragAction
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
  const asanas0 = props.schedule.cards[0].map(card => {
    return { ...props.asanas[card.asanaIndex], cardKey: card.cardKey };
  });
  const asanas1 = props.schedule.cards[1].map(card => {
    return { ...props.asanas[card.asanaIndex], cardKey: card.cardKey };
  });

  return (
    <Paper className={classes.root}>
      <AsanasGrid
        gridId={0}
        language={props.language}
        asanas={asanas0}
        dragging={props.schedule.dragging}
        dragOver={props.schedule.dragOver}
        dragOverGrid={props.schedule.dragOverGrid}
        fastTransition={props.schedule.fastTransition}
        startDragAction={props.startDragAction}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        dragSource={props.schedule.dragSource}
        removableCards={true}
      />
      <ScheduleSectionsSeparator />
      <AsanasGrid
        gridId={1}
        language={props.language}
        asanas={asanas1}
        dragging={props.schedule.dragging}
        dragOver={props.schedule.dragOver}
        dragOverGrid={props.schedule.dragOverGrid}
        fastTransition={props.schedule.fastTransition}
        startDragAction={props.startDragAction}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        dragSource={props.schedule.dragSource}
        removableCards={true}
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
    addAsanaAction: (asanaId, gridId) =>
      dispatch(addAsanaAction(asanaId, gridId)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
