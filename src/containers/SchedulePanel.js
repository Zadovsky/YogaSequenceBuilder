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
  closeGridAction,
  onChangeGridNameAction
} from "../actions/AsanasGridActions";
import { onDragEnterGridPhAction } from "../actions/GridPlaceHolderActions";
import { onDragEnterHolder } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";
import "./SchedulePanel.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "100%"
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
  const asanas = props.asanasArr.arr.map(asana => {
    return {
      ...asana,
      asanaName: asana.asanaName[props.language]
    };
  });

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
          dragSourcePanelIsSchedule={props.schedule.dragSourcePanelIsSchedule}
          asanas={asanas}
          itIsSchedulePanel={true}
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
          onChangeGridNameAction={props.onChangeGridNameAction}
          gridDefaultName={props.schedule.gridDefaultName[props.language]}
          selectedGroupId={null}
          onGridBlockScroll={() => {}}
        />
      </Paper>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    asanasArr: store.asanasArr,
    schedule: store.schedule
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startCardDragAction: (asanaId, gridId, itIsSchedulePanel) =>
      dispatch(startCardDragAction(asanaId, gridId, itIsSchedulePanel)),
    startGridDragAction: (gridId, e) =>
      dispatch(startGridDragAction(gridId, e)),
    onDragIconMouseDownAction: () => dispatch(onDragIconMouseDownAction()),
    onDragIconMouseUpAction: () => dispatch(onDragIconMouseUpAction()),
    addAsanaAction: (asanaId, gridId, itIsSchedulePanel, e) =>
      dispatch(addAsanaAction(asanaId, gridId, itIsSchedulePanel, e)),
    closeCardAction: (cardIndex, gridId) =>
      dispatch(closeCardAction(cardIndex, gridId)),
    closeGridAction: gridId => dispatch(closeGridAction(gridId)),
    dragEnterAction: (enterIndex, gridId, itIsSchedulePanel) =>
      dispatch(dragEnterAction(enterIndex, gridId, itIsSchedulePanel)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: (gridId, itIsSchedulePanel) =>
      dispatch(onDragEnterEmptySpace(gridId, itIsSchedulePanel)),
    dragEnterGridAction: gridId => dispatch(dragEnterGridAction(gridId)),
    onDragEnterGridPhAction: () => dispatch(onDragEnterGridPhAction()),
    onChangeGridNameAction: (gridId, e) =>
      dispatch(onChangeGridNameAction(gridId, e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
