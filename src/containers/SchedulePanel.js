import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGridBlock from "../components/AsanasGridBlock";
import {
  addAsanaAction,
  dragEnterAction,
  startCardDragAction,
  closeCardAction
} from "../actions/AsanaCardActions";
import {
  startGridDragAction,
  onDragIconMouseDownAction,
  onDragIconMouseUpAction,
  dragEnterGridAction,
  closeGridAction
} from "../actions/AsanasGridActions";
import { onDragEnterGridPhAction } from "../actions/GridPlaceHolderActions";
import { onDragEnterHolder } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function SchedulePanel(props) {
  const classes = useStyles();
  const onDragOverFunc =
    props.schedule.draggingGrid !== null
      ? e => {
          e.preventDefault();
        }
      : () => {};

  return (
    <div className="SchedulePanel" onDragOver={onDragOverFunc}>
      <Paper className={classes.root}>
        <AsanasGridBlock
          cards={props.schedule.cards}
          draggingCard={props.schedule.draggingCard}
          dragOverCard={props.schedule.dragOverCard}
          dragOverGrid={props.schedule.dragOverGrid}
          fastTransition={props.schedule.fastTransition}
          dragSourceGrid={props.schedule.dragSourceGrid}
          language={props.language}
          asanas={props.asanas.arr}
          ItIsSchedulePanel={true}
          startCardDragAction={props.startCardDragAction}
          startGridDragAction={props.startGridDragAction}
          onDragIconMouseDownAction={props.onDragIconMouseDownAction}
          onDragIconMouseUpAction={props.onDragIconMouseUpAction}
          addAsanaAction={props.addAsanaAction}
          dragEnterAction={props.dragEnterAction}
          onDragEnterEmptySpace={props.onDragEnterEmptySpace}
          onDragEnterHolder={props.onDragEnterHolder}
          closeCardAction={props.closeCardAction}
          closeGridAction={props.closeGridAction}
          draggingGrid={props.schedule.draggingGrid}
          gridHeight={props.schedule.gridHeight}
          dragEnterGridAction={props.dragEnterGridAction}
          onDragEnterGridPhAction={props.onDragEnterGridPhAction}
        />
      </Paper>
    </div>
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
    startCardDragAction: (asanaId, gridId) =>
      dispatch(startCardDragAction(asanaId, gridId)),
    startGridDragAction: (gridId, e) =>
      dispatch(startGridDragAction(gridId, e)),
    onDragIconMouseDownAction: () => dispatch(onDragIconMouseDownAction()),
    onDragIconMouseUpAction: () => dispatch(onDragIconMouseUpAction()),
    addAsanaAction: (asanaId, gridId, ItIsSchedulePanel, e) =>
      dispatch(addAsanaAction(asanaId, gridId, ItIsSchedulePanel, e)),
    closeCardAction: (cardIndex, gridId) =>
      dispatch(closeCardAction(cardIndex, gridId)),
    closeGridAction: gridId => dispatch(closeGridAction(gridId)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId)),
    dragEnterGridAction: gridId => dispatch(dragEnterGridAction(gridId)),
    onDragEnterGridPhAction: () => dispatch(onDragEnterGridPhAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
