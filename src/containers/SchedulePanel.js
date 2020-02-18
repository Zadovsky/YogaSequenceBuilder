import React from "react";
import { connect } from "react-redux";
import Panel from "../components/Panel";
import SaveLoadPdfButtons from "../components/SaveLoadPdfButtons";
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

  const asanas = asanasArr.arr.map(asana => {
    return {
      ...asana,
      asanaName: asana.asanaName[language.curLang]
    };
  });

  return (
    <Panel
      asanas={asanas}
      panelNameRO={false}
      onChangePanelNameAction={onChangePanelNameAction}
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
      dragEnterGridAction={dragEnterGridAction}
      onDragEnterGridPhAction={onDragEnterGridPhAction}
      onChangeGridNameAction={onChangeGridNameAction}
      draggingGrid={draggingGrid}
      isPanelNameDef={isPanelNameDef}
      panelDefaultName={panelDefaultName[language.curLang]}
      panelName={panelName}
      cards={cards}
      draggingCard={draggingCard}
      dragOverCard={dragOverCard}
      dragOverGrid={dragOverGrid}
      fastTransition={fastTransition}
      dragSourceGrid={dragSourceGrid}
      dragSourcePanelIsSchedule={dragSourcePanelIsSchedule}
      gridHeight={gridHeight}
      gridDefaultName={gridDefaultName[language.curLang]}
      buttonsPanel={<SaveLoadPdfButtons />}
      wrapperClassName={"SchedulePanel"}
      itIsSchedulePanel={true}
    />
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
