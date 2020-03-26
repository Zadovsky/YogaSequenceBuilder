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
import { onDragEnterHolderAction } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpaceAction } from "../actions/EmptySpaceAtTheEndActions";
import { onChangePanelNameAction } from "../actions/PanelNameActions";
import { onClickSave } from "../actions/SaveLoadPdfButtonsActions";
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
    gridDefaultName,
    saveLoadPdfText
  } = props.schedule;

  const {
    asanasArr,
    language,
    user,
    onChangePanelNameAction,
    startCardDragAction,
    startGridDragAction,
    onDragIconMouseDownAction,
    onDragIconMouseUpAction,
    addAsanaAction,
    dragEnterAction,
    onDragEnterEmptySpaceAction,
    onDragEnterHolderAction,
    closeCardAction,
    closeGridAction,
    dragEnterGridAction,
    onDragEnterGridPhAction,
    onChangeGridNameAction,
    onClickSave
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
      onDragEnterEmptySpaceAction={onDragEnterEmptySpaceAction}
      onDragEnterHolderAction={onDragEnterHolderAction}
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
      buttonsPanel={
        <SaveLoadPdfButtons
          texts={saveLoadPdfText[language.curLang]}
          onClickSave={() => onClickSave(user.login, user.password)}
        />
      }
      wrapperClassName={"SchedulePanel"}
      itIsSchedulePanel={true}
      selectedGroupId={null}
      onGridBlockScroll={() => {}}
    />
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    asanasArr: store.asanasArr,
    schedule: store.schedule,
    user: store.user
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
    onDragEnterHolderAction: (index, gridId) =>
      dispatch(onDragEnterHolderAction(index, gridId)),
    onDragEnterEmptySpaceAction: (gridId, itIsSchedulePanel) =>
      dispatch(onDragEnterEmptySpaceAction(gridId, itIsSchedulePanel)),
    dragEnterGridAction: gridId => dispatch(dragEnterGridAction(gridId)),
    onDragEnterGridPhAction: () => dispatch(onDragEnterGridPhAction()),
    onChangeGridNameAction: (gridId, e) =>
      dispatch(onChangeGridNameAction(gridId, e)),
    onChangePanelNameAction: e => dispatch(onChangePanelNameAction(e)),
    onClickSave: (login, password) => dispatch(onClickSave(login, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
