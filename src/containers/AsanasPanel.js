import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGridBlock from "../components/AsanasGridBlock";
import {
  addAsanaAction,
  dragEnterAction,
  startCardDragAction
} from "../actions/AsanaCardActions";
import { startGridDragAction } from "../actions/AsanasGridActions";
import { onDragEnterHolder } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function createCardsArr(asanas) {
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
      gridName: group.name,
      gridCards: gridCards
    });
  });

  return cards;
}

function AsanasPanel(props) {
  const classes = useStyles();
  const cards = createCardsArr(props.asanas);

  return (
    <div className="AsanasPanel">
      <Paper className={classes.root}>
        <AsanasGridBlock
          cards={cards}
          draggingCard={null}
          dragOverCard={null}
          dragOverGrid={null}
          fastTransition={false}
          dragSourceGrid={null}
          dragSourcePanelIsSchedule={null}
          language={props.language}
          asanas={props.asanas.arr}
          ItIsSchedulePanel={false}
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
        />
      </Paper>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    asanas: store.asanas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startCardDragAction: (asanaId, gridId, ItIsSchedulePanel) =>
      dispatch(startCardDragAction(asanaId, gridId, ItIsSchedulePanel)),
    startGridDragAction: (gridId, e) =>
      dispatch(startGridDragAction(gridId, e)),
    addAsanaAction: (asanaId, gridId, ItIsSchedulePanel, e) =>
      dispatch(addAsanaAction(asanaId, gridId, ItIsSchedulePanel, e)),
    dragEnterAction: (enterIndex, gridId, ItIsSchedulePanel) =>
      dispatch(dragEnterAction(enterIndex, gridId, ItIsSchedulePanel)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: (gridId, ItIsSchedulePanel) =>
      dispatch(onDragEnterEmptySpace(gridId, ItIsSchedulePanel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsanasPanel);
