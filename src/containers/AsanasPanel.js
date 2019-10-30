import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGrid from "../components/AsanasGrid";
import {
  addAsanaAction,
  dragEnterAction,
  dragLeaveAction
} from "../actions/AsanaCardActions";
import {
  onDragEnterHolder,
  onDragLeaveHolder
} from "../actions/PlaceHolderActions";
import { onDragLeaveGrid } from "../actions/AsanasGridActions";
import { onDragEnterEmptySpace } from "../actions/EmptySpaceAtTheEndActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function AsanasPanel(props) {
  const classes = useStyles();
  const asanas = props.asanas.map((asana, i) => {
    return { ...asana, cardKey: i };
  });

  return (
    <Paper className={classes.root}>
      <AsanasGrid
        gridId="ASANAS"
        language={props.language}
        asanas={asanas}
        addAsanaAction={props.addAsanaAction}
        dragging={null}
        dragOver={null}
        fastTransition={false}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        dragLeaveAction={props.dragLeaveAction}
        onDragEnterHolder={props.onDragEnterHolder}
        onDragLeaveHolder={props.onDragLeaveHolder}
        onDragLeaveGrid={props.onDragLeaveGrid}
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
    addAsanaAction: (asanaId, gridId) =>
      dispatch(addAsanaAction(asanaId, gridId)),
    dragEnterAction: (enterIndex, gridId) =>
      dispatch(dragEnterAction(enterIndex, gridId)),
    dragLeaveAction: (index, gridId) =>
      dispatch(dragLeaveAction(index, gridId)),
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragLeaveHolder: (index, gridId) =>
      dispatch(onDragLeaveHolder(index, gridId)),
    onDragLeaveGrid: e => dispatch(onDragLeaveGrid(e)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsanasPanel);
