import React from "react";
import { connect } from "react-redux";
import Panel from "../components/Panel";
import AsanasNavigation from "../components/AsanasNavigation";
import {
  addAsanaAction,
  dragEnterAction,
  startCardDragAction
} from "../actions/AsanaCardActions";
import { startGridDragAction } from "../actions/AsanasGridActions";
import { onGridBlockScroll } from "../actions/AsanasGridBlockActions";
import { onDragEnterHolder } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";
import { onClickAsanasNavigation } from "../actions/AsanasNavigationActions";
import "./AsanasPanel.css";

function createCardsArr(asanas, language) {
  var cards = [];
  asanas.groups.forEach(group => {
    let gridCards = [];
    asanas.arr.forEach((asana, i) => {
      if (asana.groupId === group.id) {
        gridCards.push({ asanaIndex: i, cardKey: i });
      }
    });

    cards.push({
      gridKey: group.id,
      gridName: group.name[language],
      gridCards: gridCards
    });
  });

  return cards;
}

function AsanasPanel(props) {
  const cards = createCardsArr(props.asanasArr, props.language.curLang);
  const asanas = props.asanasArr.arr.map(asana => {
    return {
      ...asana,
      asanaName: asana.asanaName[props.language.curLang]
    };
  });
  const groups = props.asanasArr.groups.map(group => {
    return {
      ...group,
      name: group.name[props.language.curLang]
    };
  });

  return (
    <Panel
      asanas={asanas}
      panelNameRO={true}
      onChangePanelNameAction={() => {}}
      startCardDragAction={props.startCardDragAction}
      startGridDragAction={props.startGridDragAction}
      onDragIconMouseDownAction={() => {}}
      onDragIconMouseUpAction={() => {}}
      addAsanaAction={props.addAsanaAction}
      dragEnterAction={props.dragEnterAction}
      onDragEnterEmptySpace={props.onDragEnterEmptySpace}
      onDragEnterHolder={props.onDragEnterHolder}
      closeCardAction={() => {}}
      closeGridAction={() => {}}
      dragEnterGridAction={() => {}}
      onDragEnterGridPhAction={() => {}}
      onChangeGridNameAction={() => {}}
      draggingGrid={null}
      isPanelNameDef={true}
      panelDefaultName={props.asanas.panelDefaultName[props.language.curLang]}
      panelName={""}
      cards={cards}
      draggingCard={null}
      dragOverCard={null}
      dragOverGrid={null}
      fastTransition={false}
      dragSourceGrid={null}
      dragSourcePanelIsSchedule={null}
      gridHeight={null}
      gridDefaultName={""}
      buttonsPanel={
        <AsanasNavigation
          groups={groups}
          onClick={props.onClickAsanasNavigation}
        />
      }
      wrapperClassName={"AsanasPanel"}
      itIsSchedulePanel={false}
      selectedGroupId={props.asanas.selectedGroupId}
      onGridBlockScroll={props.onGridBlockScroll}
    />
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    asanasArr: store.asanasArr,
    asanas: store.asanas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGridBlockScroll: () => dispatch(onGridBlockScroll()),
    onClickAsanasNavigation: groupId =>
      dispatch(onClickAsanasNavigation(groupId)),
    startCardDragAction: (asanaId, gridId, itIsSchedulePanel) =>
      dispatch(startCardDragAction(asanaId, gridId, itIsSchedulePanel)),
    startGridDragAction: (gridId, e) =>
      dispatch(startGridDragAction(gridId, e)),
    addAsanaAction: (asanaId, gridId, itIsSchedulePanel, e) =>
      dispatch(addAsanaAction(asanaId, gridId, itIsSchedulePanel, e)),
    dragEnterAction: (enterIndex, gridId, itIsSchedulePanel) =>
      dispatch(dragEnterAction(enterIndex, gridId, itIsSchedulePanel)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: (gridId, itIsSchedulePanel) =>
      dispatch(onDragEnterEmptySpace(gridId, itIsSchedulePanel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsanasPanel);
