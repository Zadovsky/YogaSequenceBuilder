import React from "react";
import { connect } from "react-redux";
import Panel from "../components/Panel";
import SaveLoadPdfButtons from "../components/SaveLoadPdfButtons";
import SetCookies from "../components/SetCookies";
import {
  dragEnterAction,
  startCardDragScheduleAction,
  closeCardAction,
  touchStartAction,
  touchMoveDndAction,
  touchMoveScrollAction,
  touchEndAction,
} from "../actions/AsanaCardActions";
import {
  startGridDragAction,
  onDragIconMouseDownAction,
  onDragIconMouseUpAction,
  dragEnterGridCardAction,
  dragEnterGridGridAction,
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
import {
  onSetCookiesAction,
  onSetFirstStartCookieAction,
} from "../actions/SetCookiesActions";
import { onPDFDownloadAction } from "../actions/PDFDownloadActions";
import {
  onOpenMenuScheduleAction,
  onCloseMenuScheduleAction,
} from "../actions/MenuButtonActions";
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
    openMenu,
    lastDragEnterCard,
    lastDragEnterGrid,
  } = props.schedule;

  const { touchDnd, ghostBlock } = props.touch;

  const {
    asanasArr,
    language,
    user,
    logo,
    onChangePanelNameAction,
    onBlurPanelNameAction,
    startCardDragScheduleAction,
    startGridDragAction,
    onDragIconMouseDownAction,
    onDragIconMouseUpAction,
    dragEnterAction,
    onDragEnterEmptySpaceAction,
    onDragEnterHolderAction,
    closeCardAction,
    closeGridAction,
    dragEnterGridCardAction,
    dragEnterGridGridAction,
    onDragEnterGridPhAction,
    onChangeGridNameAction,
    onBlurGridNameAction,
    onClickSave,
    onClickLoad,
    onClickPdf,
    onPDFDownloadAction,
    onOpenMenuScheduleAction,
    onCloseMenuScheduleAction,
    touchStartAction,
    touchMoveDndAction,
    touchMoveScrollAction,
    touchEndAction,
    onSetFirstStartCookieAction,
  } = props;

  const asanas = asanasArr.arr.map((asana) => {
    return {
      ...asana,
      asanaName: asana.asanaName[language.curLang],
    };
  });

  var dragEnterGridAction = () => {},
    dragEnterVar = () => {},
    onDragEnterEmptySpaceVar = () => {};
  if (draggingCard !== null) {
    dragEnterGridAction = dragEnterGridCardAction;
    dragEnterVar = dragEnterAction;
    onDragEnterEmptySpaceVar = onDragEnterEmptySpaceAction;
  } else if (draggingGrid !== null) {
    dragEnterGridAction = dragEnterGridGridAction;
  }

  return (
    <div className="SchedulePanel">
      <Panel
        asanas={asanas}
        onChangePanelNameAction={onChangePanelNameAction}
        onBlurPanelNameAction={onBlurPanelNameAction}
        startCardDragAction={readOnly ? () => {} : startCardDragScheduleAction}
        startGridDragAction={startGridDragAction}
        onDragIconMouseDownAction={onDragIconMouseDownAction}
        onDragIconMouseUpAction={onDragIconMouseUpAction}
        addAsanaAction={() => {}}
        dragEnterAction={dragEnterVar}
        onDragEnterEmptySpaceAction={onDragEnterEmptySpaceVar}
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
            readOnly={readOnly}
          />
        }
        wrapperClassName={"SchedulePanel"}
        itIsSchedulePanel={!readOnly}
        selectedGroupId={null}
        onGridBlockScroll={() => {}}
        openMenuAction={onOpenMenuScheduleAction}
        openMenu={openMenu}
        closeMenuAction={onCloseMenuScheduleAction}
        lastDragEnterCard={lastDragEnterCard}
        lastDragEnterGrid={lastDragEnterGrid}
        touchStartAction={readOnly ? () => {} : touchStartAction}
        touchMoveAction={
          touchDnd
            ? touchMoveDndAction
            : touchDnd === null
            ? touchMoveScrollAction
            : () => {}
        }
        touchEndAction={touchEndAction}
        touchDnd={touchDnd}
        ghostBlock={ghostBlock}
      />
      <SetCookies
        setCookies={setCookies}
        onSetCookiesAction={() =>
          props.onSetCookiesAction(cards, panelName, nextGridKey, nextCardKey)
        }
        onSetFirstStartCookieAction={onSetFirstStartCookieAction}
      />
      {renderPdf && (
        <PDFDownload
          onPDFDownloadAction={onPDFDownloadAction}
          cards={cards}
          asanas={asanas}
          panelName={
            panelName === null ? panelDefaultName[language.curLang] : panelName
          }
          gridDefaultName={gridDefaultName[language.curLang]}
          logo={logo}
        />
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    asanasArr: store.asanasArr,
    schedule: store.schedule,
    user: store.user,
    logo: store.logo,
    touch: store.touch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCookiesAction: (cards, panelName, nextGridKey, nextCardKey) =>
      dispatch(onSetCookiesAction(cards, panelName, nextGridKey, nextCardKey)),
    startCardDragScheduleAction: (asanaId, gridId) =>
      dispatch(startCardDragScheduleAction(asanaId, gridId)),
    startGridDragAction: (gridId, e) =>
      dispatch(startGridDragAction(gridId, e)),
    onDragIconMouseDownAction: () => dispatch(onDragIconMouseDownAction()),
    onDragIconMouseUpAction: () => dispatch(onDragIconMouseUpAction()),
    closeCardAction: (cardIndex, gridId) =>
      dispatch(closeCardAction(cardIndex, gridId)),
    closeGridAction: (gridId) => dispatch(closeGridAction(gridId)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    onDragEnterHolderAction: () => dispatch(onDragEnterHolderAction()),
    onDragEnterEmptySpaceAction: (gridId) =>
      dispatch(onDragEnterEmptySpaceAction(gridId)),
    dragEnterGridCardAction: (gridId) =>
      dispatch(dragEnterGridCardAction(gridId)),
    dragEnterGridGridAction: (gridId) =>
      dispatch(dragEnterGridGridAction(gridId)),
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
    onOpenMenuScheduleAction: () => dispatch(onOpenMenuScheduleAction()),
    onCloseMenuScheduleAction: () => dispatch(onCloseMenuScheduleAction()),
    touchStartAction: (e, asanaIndex, gridId, schedule, targetClass) =>
      dispatch(touchStartAction(e, asanaIndex, gridId, schedule, targetClass)),
    touchMoveDndAction: (e, ref) => dispatch(touchMoveDndAction(e, ref)),
    touchMoveScrollAction: () => dispatch(touchMoveScrollAction()),
    touchEndAction: () => dispatch(touchEndAction()),
    onSetFirstStartCookieAction: () => dispatch(onSetFirstStartCookieAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
