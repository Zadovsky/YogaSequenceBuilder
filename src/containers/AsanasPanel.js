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
  const cards = createCardsArr(props.asanas, props.language);
  const asanas = props.asanas.arr.map(asana => {
    return {
      ...asana,
      asanaName: asana.asanaName[props.language]
    };
  });

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
