import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGrid from "../components/AsanasGrid";
import {
  addAsanaAction,
  dragEnterAction,
  dragLeaveAction
} from "../actions/AsanaCardActions";
import {
  onDragEnterHolder,
  onDragLeaveHolder
} from "../actions/PlaceHolderActions";
import { onDragLeaveGrid } from "../actions/AsanasGridActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function SchedulePanel(props) {
  const classes = useStyles();
  const asanas = props.schedule.cards.map(card => {
    return { ...props.asanas[card.asanaIndex], cardKey: card.cardKey };
  });

  return (
    <Paper className={classes.root}>
      <AsanasGrid
        gridId="SCHEDULE"
        language={props.language}
        asanas={asanas}
        dragging={props.schedule.dragging}
        dragOver={props.schedule.dragOver}
        fastTransition={props.schedule.fastTransition}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        dragLeaveAction={props.dragLeaveAction}
        onDragEnterHolder={props.onDragEnterHolder}
        onDragLeaveHolder={props.onDragLeaveHolder}
        onDragLeaveGrid={props.onDragLeaveGrid}
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
    addAsanaAction: (asanaId, gridId) =>
      dispatch(addAsanaAction(asanaId, gridId)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    dragLeaveAction: (index, gridId) =>
      dispatch(dragLeaveAction(index, gridId)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragLeaveHolder: (index, gridId) =>
      dispatch(onDragLeaveHolder(index, gridId)),
    onDragLeaveGrid: e => dispatch(onDragLeaveGrid(e)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulePanel);
