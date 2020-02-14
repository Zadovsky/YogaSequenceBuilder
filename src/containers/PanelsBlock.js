import React from "react";
import AsanasPanel from "../containers/AsanasPanel";
import Panel from "../components/Panel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
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
import { onChangePanelNameAction } from "../actions/PanelNameActions";

const useStyles = makeStyles(theme => ({
  grid: {
    height: "100%"
  }
}));

function PanelsBlock(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={6} className={classes.grid}>
        <AsanasPanel />
      </Grid>
      <Grid item xs={6} className={classes.grid}>
        <Panel
          asanasArr={props.asanasArr}
          language={props.language}
          onChangePanelNameAction={props.onChangePanelNameAction}
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
          dragEnterGridAction={props.dragEnterGridAction}
          onDragEnterGridPhAction={props.onDragEnterGridPhAction}
          onChangeGridNameAction={props.onChangeGridNameAction}
          draggingGrid={props.schedule.draggingGrid}
          isPanelNameDef={props.schedule.isPanelNameDef}
          panelDefaultName={props.schedule.panelDefaultName}
          panelName={props.schedule.panelName}
          cards={props.schedule.cards}
          draggingCard={props.schedule.draggingCard}
          dragOverCard={props.schedule.dragOverCard}
          dragOverGrid={props.schedule.dragOverGrid}
          fastTransition={props.schedule.fastTransition}
          dragSourceGrid={props.schedule.dragSourceGrid}
          dragSourcePanelIsSchedule={props.schedule.dragSourcePanelIsSchedule}
          gridHeight={props.schedule.gridHeight}
          gridDefaultName={props.schedule.gridDefaultName}
        />
      </Grid>
    </Grid>
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
      dispatch(onChangeGridNameAction(gridId, e)),
    onChangePanelNameAction: e => dispatch(onChangePanelNameAction(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelsBlock);
