import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGrid from "../components/AsanasGrid";
import { addAsanaAction, dragEnterAction } from "../actions/AsanaCardActions";
import { onDragEnterHolder } from "../actions/PlaceHolderActions";
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
        dragOverGrid={null}
        fastTransition={false}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        dragSource={null}
        removableCards={false}
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
    onDragEnterHolder: (index, gridId) =>
      dispatch(onDragEnterHolder(index, gridId)),
    onDragEnterEmptySpace: gridId => dispatch(onDragEnterEmptySpace(gridId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsanasPanel);
