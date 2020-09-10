import React from "react";
import { connect } from "react-redux";
import Panel from "../components/Panel";
import AsanasNavigation from "../components/AsanasNavigation";
import {
  addAsanaAction,
  startCardDragAsanasAction,
} from "../actions/AsanaCardActions";
import { onGridBlockScroll } from "../actions/AsanasGridBlockActions";
import { onDragEnterHolderAction } from "../actions/PlaceHolderActions";
import { onClickAsanasNavigation } from "../actions/AsanasNavigationActions";
import {
  onOpenMenuAsanasAction,
  onCloseMenuAsanasAction,
} from "../actions/MenuButtonActions";
import "./AsanasPanel.css";

function createCardsArr(asanas, language) {
  var cards = [];
  asanas.groups.forEach((group) => {
    let gridCards = [];
    asanas.arr.forEach((asana, i) => {
      if (asana.groupId === group.id) {
        gridCards.push({ asanaIndex: i, cardKey: i });
      }
    });

    cards.push({
      gridKey: group.id,
      gridName: group.name[language],
      gridCards: gridCards,
    });
  });

  return cards;
}

function AsanasPanel(props) {
  const cards = createCardsArr(props.asanasArr, props.language.curLang);
  const asanas = props.asanasArr.arr.map((asana) => {
    return {
      ...asana,
      asanaName: asana.asanaName[props.language.curLang],
    };
  });
  const groups = props.asanasArr.groups.map((group) => {
    return {
      ...group,
      name: group.name[props.language.curLang],
    };
  });

  return (
    <Panel
      asanas={asanas}
      onChangePanelNameAction={() => {}}
      onBlurPanelNameAction={() => {}}
      startCardDragAction={props.startCardDragAction}
      startGridDragAction={() => {}}
      onDragIconMouseDownAction={() => {}}
      onDragIconMouseUpAction={() => {}}
      addAsanaAction={props.addAsanaAction}
      dragEnterAction={() => {}}
      onDragEnterEmptySpaceAction={() => {}}
      onDragEnterHolderAction={props.onDragEnterHolderAction}
      closeCardAction={() => {}}
      closeGridAction={() => {}}
      dragEnterGridAction={() => {}}
      onDragEnterGridPhAction={() => {}}
      onChangeGridNameAction={() => {}}
      onBlurGridNameAction={() => {}}
      draggingGrid={null}
      panelDefaultName={props.asanas.panelDefaultName[props.language.curLang]}
      panelName={null}
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
      onGridBlockScroll={
        props.asanas.selectedGroupId ? props.onGridBlockScroll : () => {}
      }
      openMenuAction={props.onOpenMenuAsanasAction}
      openMenu={props.asanas.openMenu}
      closeMenuAction={props.onCloseMenuAsanasAction}
    />
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    asanasArr: store.asanasArr,
    asanas: store.asanas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGridBlockScroll: () => dispatch(onGridBlockScroll()),
    onClickAsanasNavigation: (groupId) =>
      dispatch(onClickAsanasNavigation(groupId)),
    startCardDragAction: (asanaId, gridId) =>
      dispatch(startCardDragAsanasAction(asanaId, gridId)),
    addAsanaAction: (asanaId, gridId) =>
      dispatch(addAsanaAction(asanaId, gridId)),
    onDragEnterHolderAction: (index, gridId) =>
      dispatch(onDragEnterHolderAction(index, gridId)),
    onOpenMenuAsanasAction: () => dispatch(onOpenMenuAsanasAction()),
    onCloseMenuAsanasAction: () => dispatch(onCloseMenuAsanasAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsanasPanel);
