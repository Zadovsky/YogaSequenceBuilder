import React from "react";
import { connect } from "react-redux";
import Panel from "../components/Panel";
import SaveLoadPdfButtons from "../components/SaveLoadPdfButtons";
import SetCookies from "../components/SetCookies";
import {
  dragEnterAction,
  startCardDragAction,
  closeCardAction,
} from "../actions/AsanaCardActions";
import {
  startGridDragAction,
  onDragIconMouseDownAction,
  onDragIconMouseUpAction,
  dragEnterGridAction,
  closeGridAction,
  onChangeGridNameAction,
  onBlurGridNameAction,
} from "../actions/AsanasGridActions";
import { onDragEnterGridPhAction } from "../actions/GridPlaceHolderActions";
import { onDragEnterHolderAction } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpaceAction } from "../actions/EmptySpaceAtTheEndActions";
import {
  onChangePanelNameAction,
  onBlurPanelNameAction,
} from "../actions/PanelNameActions";
import {
  onClickSave,
  onClickLoad,
  onClickPdf,
} from "../actions/SaveLoadPdfButtonsActions";
import { onSetCookiesAction } from "../actions/SetCookiesActions";
import { onPDFDownloadAction } from "../actions/PDFDownloadActions";
import PDFDownload from "../components/PDFDownload";
import "./SchedulePanel.css";

function SchedulePanel(props) {
  const {
    setCookies,
    renderPdf,
    nextGridKey,
    nextCardKey,
    readOnly,
    draggingGrid,
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
    saveLoadPdfText,
  } = props.schedule;

  const {
    asanasArr,
    language,
    user,
    onChangePanelNameAction,
    onBlurPanelNameAction,
    startCardDragAction,
    startGridDragAction,
    onDragIconMouseDownAction,
    onDragIconMouseUpAction,
    dragEnterAction,
    onDragEnterEmptySpaceAction,
    onDragEnterHolderAction,
    closeCardAction,
    closeGridAction,
    dragEnterGridAction,
    onDragEnterGridPhAction,
    onChangeGridNameAction,
    onBlurGridNameAction,
    onClickSave,
    onClickLoad,
    onClickPdf,
    onPDFDownloadAction,
  } = props;

  const asanas = asanasArr.arr.map((asana) => {
    return {
      ...asana,
      asanaName: asana.asanaName[language.curLang],
    };
  });

  return (
    <div className="SchedulePanel">
      <Panel
        asanas={asanas}
        panelNameRO={false}
        onChangePanelNameAction={onChangePanelNameAction}
        onBlurPanelNameAction={onBlurPanelNameAction}
        startCardDragAction={readOnly ? () => {} : startCardDragAction}
        startGridDragAction={startGridDragAction}
        onDragIconMouseDownAction={onDragIconMouseDownAction}
        onDragIconMouseUpAction={onDragIconMouseUpAction}
        addAsanaAction={() => {}}
        dragEnterAction={dragEnterAction}
        onDragEnterEmptySpaceAction={onDragEnterEmptySpaceAction}
        onDragEnterHolderAction={onDragEnterHolderAction}
        closeCardAction={closeCardAction}
        closeGridAction={closeGridAction}
        dragEnterGridAction={dragEnterGridAction}
        onDragEnterGridPhAction={onDragEnterGridPhAction}
        onChangeGridNameAction={onChangeGridNameAction}
        onBlurGridNameAction={onBlurGridNameAction}
        draggingGrid={draggingGrid}
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
            onClickSave={() =>
              onClickSave(
                user.login,
                user.password,
                panelName === null
                  ? panelDefaultName[language.curLang]
                  : panelName
              )
            }
            onClickLoad={() => onClickLoad(user.login, user.password)}
            onClickPdf={onClickPdf}
          />
        }
        wrapperClassName={"SchedulePanel"}
        itIsSchedulePanel={!readOnly}
        selectedGroupId={null}
        onGridBlockScroll={() => {}}
      />
      <SetCookies
        setCookies={setCookies}
        onSetCookiesAction={() =>
          props.onSetCookiesAction(cards, panelName, nextGridKey, nextCardKey)
        }
      />
      {renderPdf && <PDFDownload onPDFDownloadAction={onPDFDownloadAction} />}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    asanasArr: store.asanasArr,
    schedule: store.schedule,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCookiesAction: (cards, panelName, nextGridKey, nextCardKey) =>
      dispatch(onSetCookiesAction(cards, panelName, nextGridKey, nextCardKey)),
    startCardDragAction: (asanaId, gridId, itIsSchedulePanel) =>
      dispatch(startCardDragAction(asanaId, gridId, itIsSchedulePanel)),
    startGridDragAction: (gridId, e) =>
      dispatch(startGridDragAction(gridId, e)),
    onDragIconMouseDownAction: () => dispatch(onDragIconMouseDownAction()),
    onDragIconMouseUpAction: () => dispatch(onDragIconMouseUpAction()),
    closeCardAction: (cardIndex, gridId) =>
      dispatch(closeCardAction(cardIndex, gridId)),
    closeGridAction: (gridId) => dispatch(closeGridAction(gridId)),
    dragEnterAction: (enterIndex, gridId, itIsSchedulePanel) =>
      dispatch(dragEnterAction(enterIndex, gridId, itIsSchedulePanel)),
    onDragEnterHolderAction: (index, gridId) =>
      dispatch(onDragEnterHolderAction(index, gridId)),
    onDragEnterEmptySpaceAction: (gridId, itIsSchedulePanel) =>
      dispatch(onDragEnterEmptySpaceAction(gridId, itIsSchedulePanel)),
    dragEnterGridAction: (gridId) => dispatch(dragEnterGridAction(gridId)),
    onDragEnterGridPhAction: () => dispatch(onDragEnterGridPhAction()),
    onChangeGridNameAction: (gridId, e) =>
      dispatch(onChangeGridNameAction(gridId, e)),
    onBlurGridNameAction: () => dispatch(onBlurGridNameAction()),
    onChangePanelNameAction: (e) => dispatch(onChangePanelNameAction(e)),
    onBlurPanelNameAction: (e) => dispatch(onBlurPanelNameAction(e)),
    onClickSave: (login, password, seqName) =>
      dispatch(onClickSave(login, password, seqName)),
    onClickLoad: (login, password) => dispatch(onClickLoad(login, password)),
    onClickPdf: () => dispatch(onClickPdf()),
    onPDFDownloadAction: (ref) => dispatch(onPDFDownloadAction(ref)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
