import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGrid from "../components/AsanasGrid";
import ScheduleSectionsSeparator from "../components/ScheduleSectionsSeparator";
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

function createGridArr(props) {
  return props.schedule.cards.map((cards, i) => {
    const asanas = cards.gridCards.map(card => {
      return { ...props.asanas[card.asanaIndex], cardKey: card.cardKey };
    });

    return (
      <AsanasGrid
        key={cards.gridKey}
        gridId={i}
        language={props.language}
        asanas={asanas}
        dragging={props.schedule.dragging}
        dragOver={props.schedule.dragOver}
        dragOverGrid={props.schedule.dragOverGrid}
        fastTransition={props.schedule.fastTransition}
        startDragAction={props.startDragAction}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        dragSource={props.schedule.dragSource}
        removableCards={true}
      />
    );
  });
}

function createGridSepArr(gridArr) {
  var gridSepArr = [];
  gridArr.forEach((grid, i) => {
    if (i > 0) {
      gridSepArr.push(<ScheduleSectionsSeparator key={"sep" + i} />);
    }
    gridSepArr.push(grid);
  });
  return gridSepArr;
}

function SchedulePanel(props) {
  const classes = useStyles();
  const gridArr = createGridArr(props);
  const gridSepArr = createGridSepArr(gridArr);

  return <Paper className={classes.root}>{gridSepArr}</Paper>;
}

const mapStateToProps = store => {
  return {
    language: store.language,
    asanas: store.asanas,
    schedule: store.schedule
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startDragAction: (asanaId, gridId) =>
      dispatch(startDragAction(asanaId, gridId)),
    addAsanaAction: (asanaId, gridId) =>
      dispatch(addAsanaAction(asanaId, gridId)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePanel);
