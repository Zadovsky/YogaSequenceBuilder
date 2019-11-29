import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGridBlock from "../components/AsanasGridBlock";
import {
  addAsanaAction,
  dragEnterAction,
  startDragAction
} from "../actions/AsanaCardActions";
import { onDragEnterHolder } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function createCardsArr(asanas) {
  var cards = [];
  asanas.groupOrder.forEach(group => {
    let gridCards = [];
    asanas.arr.forEach((asana, i) => {
      if (asana.group === group) {
        gridCards.push({ asanaIndex: i, cardKey: i });
      }
    });

    cards.push({
      gridKey: group,
      gridCards: gridCards
    });
  });

  return cards;
}

function AsanasPanel(props) {
  const classes = useStyles();
  const cards = createCardsArr(props.asanas);

  return (
    <Paper className={classes.root}>
      <AsanasGridBlock
        cards={cards}
        dragging={null}
        dragOver={null}
        dragOverGrid={null}
        fastTransition={false}
        dragSource={null}
        language={props.language}
        asanas={props.asanas.arr}
        removableCards={false}
        startDragAction={props.startDragAction}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        closeCardAction={props.closeCardAction}
      />
    </Paper>
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
    startDragAction: (asanaId, gridId) =>
      dispatch(startDragAction(asanaId, gridId)),
    addAsanaAction: (asanaId, gridId, e) =>
      dispatch(addAsanaAction(asanaId, gridId, e)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsanasPanel);
