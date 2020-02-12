import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PanelName from "../components/PanelName";
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
import { onChangePanelNameAction } from "../actions/PanelNameActions";
import "./SchedulePanel.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2, 3),
    height: "100%"
  }
}));

function SchedulePanel(props) {
  const {
    draggingGrid,
    isPanelNameDef,
    panelDefaultName,
    panelName,
    cards,
    draggingCard,
    dragOverCard,
    dragOverGrid,
    fastTransition,
    dragSourceGrid,
    dragSourcePanelIsSchedule,
    gridHeight,
    gridDefaultName
  } = props.schedule;

  const {
    asanasArr,
    language,
    onChangePanelNameAction,
    startCardDragAction,
    startGridDragAction,
    onDragIconMouseDownAction,
    onDragIconMouseUpAction,
    addAsanaAction,
    dragEnterAction,
    onDragEnterEmptySpace,
    onDragEnterHolder,
    closeCardAction,
    closeGridAction,
    dragEnterGridAction,
    onDragEnterGridPhAction,
    onChangeGridNameAction
  } = props;

  const classes = useStyles();
  const onDragOverFunc =
    draggingGrid !== null
      ? e => {
          e.preventDefault();
        }
      : () => {};
  const asanas = asanasArr.arr.map(asana => {
    return {
      ...asana,
      asanaName: asana.asanaName[language.curLang]
    };
  });

  return (
    <div className="SchedulePanel" onDragOver={onDragOverFunc}>
      <Paper className={classes.root}>
        <div className="SchedulePanelFlexBox">
          <div className="PanelNameWraper">
            <PanelName
              name={
                isPanelNameDef ? panelDefaultName[language.curLang] : panelName
              }
              onChangePanelNameAction={onChangePanelNameAction}
              readOnly={false}
            />
          </div>
          <div className="SchedulePanelFlexElement">
            <AsanasGridBlock
              cards={cards}
              draggingCard={draggingCard}
              dragOverCard={dragOverCard}
              dragOverGrid={dragOverGrid}
              fastTransition={fastTransition}
              dragSourceGrid={dragSourceGrid}
              dragSourcePanelIsSchedule={dragSourcePanelIsSchedule}
              asanas={asanas}
              itIsSchedulePanel={true}
              startCardDragAction={startCardDragAction}
              startGridDragAction={startGridDragAction}
              onDragIconMouseDownAction={onDragIconMouseDownAction}
              onDragIconMouseUpAction={onDragIconMouseUpAction}
              addAsanaAction={addAsanaAction}
              dragEnterAction={dragEnterAction}
              onDragEnterEmptySpace={onDragEnterEmptySpace}
              onDragEnterHolder={onDragEnterHolder}
              closeCardAction={closeCardAction}
              closeGridAction={closeGridAction}
              draggingGrid={draggingGrid}
              gridHeight={gridHeight}
              dragEnterGridAction={dragEnterGridAction}
              onDragEnterGridPhAction={onDragEnterGridPhAction}
              onChangeGridNameAction={onChangeGridNameAction}
              gridDefaultName={gridDefaultName[language.curLang]}
              selectedGroupId={null}
              onGridBlockScroll={() => {}}
            />
          </div>
        </div>
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
      dispatch(onChangeGridNameAction(gridId, e)),
    onChangePanelNameAction: e => dispatch(onChangePanelNameAction(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
