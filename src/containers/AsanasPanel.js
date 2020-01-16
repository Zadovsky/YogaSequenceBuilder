import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasNavigation from "../components/AsanasNavigation";
import AsanasGridBlock from "../components/AsanasGridBlock";
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

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "100%"
  }
}));

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
  const classes = useStyles();
  const cards = createCardsArr(props.asanasArr, props.language);
  const asanas = props.asanasArr.arr.map(asana => {
    return {
      ...asana,
      asanaName: asana.asanaName[props.language]
    };
  });
  const groups = props.asanasArr.groups.map(group => {
    return {
      ...group,
      name: group.name[props.language]
    };
  });

  return (
    <div className="AsanasPanel">
      <Paper className={classes.root}>
        <AsanasNavigation
          groups={groups}
          onClick={props.onClickAsanasNavigation}
        />
        <AsanasGridBlock
          cards={cards}
          draggingCard={null}
          dragOverCard={null}
          dragOverGrid={null}
          fastTransition={false}
          dragSourceGrid={null}
          dragSourcePanelIsSchedule={null}
          asanas={asanas}
          itIsSchedulePanel={false}
          startCardDragAction={props.startCardDragAction}
          startGridDragAction={props.startGridDragAction}
          onDragIconMouseDownAction={() => {}}
          onDragIconMouseUpAction={() => {}}
          addAsanaAction={props.addAsanaAction}
          dragEnterAction={props.dragEnterAction}
          onDragEnterEmptySpace={props.onDragEnterEmptySpace}
          onDragEnterHolder={props.onDragEnterHolder}
          closeCardAction={props.closeCardAction}
          draggingGrid={null}
          gridHeight={null}
          dragEnterGridAction={() => {}}
          onChangeGridNameAction={() => {}}
          selectedGroupId={props.asanas.selectedGroupId}
          onGridBlockScroll={props.onGridBlockScroll}
        />
      </Paper>
    </div>
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
