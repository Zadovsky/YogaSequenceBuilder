import React from "react";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import AsanaCard from "./AsanaCard";
import CardPlaceHolder from "./CardPlaceHolder";
import EmptySpaceAtTheEnd from "./EmptySpaceAtTheEnd";
import "./AsanasGrid.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2)
  }
}));

function makeCardsArr(props) {
  const {
    language,
    asanas,
    startCardDragAction,
    addAsanaAction,
    closeCardAction,
    gridId,
    dragging,
    dragEnterAction,
    dragSource,
    removableCards
  } = props;
  return asanas.map((asana, i) => {
    const asanaIndex = gridId === "ASANAS" ? asana.asanaIndex : i;

    return (
      <AsanaCard
        name={asana.asanaName[language]}
        img={asana.asanaImg}
        key={asana.cardKey}
        isDragging={
          dragging === null || dragSource !== gridId || !removableCards
            ? false
            : i === dragging
        }
        removableCards={removableCards}
        startCardDragAction={() => {
          startCardDragAction(asanaIndex, gridId);
        }}
        dragEnterAction={() => {
          dragEnterAction(asanaIndex, gridId);
        }}
        addAsanaAction={e => {
          addAsanaAction(asanaIndex, gridId, e);
        }}
        closeCardAction={() => {
          closeCardAction(asanaIndex, gridId);
        }}
      />
    );
  });
}

function makeCardsHoldersArr(cardsArr, props) {
  const {
    dragOver,
    dragOverGrid,
    onDragEnterHolder,
    gridId,
    fastTransition,
    dragging
  } = props;

  var cardsHoldersArr = [];

  cardsArr.forEach((card, i) => {
    const placeHolder = (
      <CardPlaceHolder
        key={"ph" + i}
        fat={dragOver === i && dragOverGrid === gridId}
        fastTransition={fastTransition}
        isDragEnd={dragging == null}
        onDragEnterHolder={() => onDragEnterHolder(i, gridId)}
      />
    );
    cardsHoldersArr.push(placeHolder, card);
  });

  return cardsHoldersArr;
}

export default function AsanasGrid(props) {
  const classes = useStyles();
  const cardsArr = makeCardsArr(props);
  const cardsHoldersArr = makeCardsHoldersArr(cardsArr, props);

  const onDragOverFunc = props.removableCards
    ? e => {
        e.preventDefault();
      }
    : () => {};

  var classArr = ["AsanasGridDraggable"];
  if (props.isDragging) classArr.push("AsanaGridDragging");
  const classStr = classArr.join(" ");

  return (
    <div
      className={classStr}
      draggable="true"
      onDragStart={e => {
        props.startGridDragAction(props.gridId, e);
      }}
      onDragEnter={() => props.dragEnterGridAction(props.gridId)}
    >
      <Paper className={classes.root}>
        <div className="AsanasGrid" onDragOver={onDragOverFunc}>
          {cardsHoldersArr}
          <EmptySpaceAtTheEnd
            onDragEnterEmptySpace={() =>
              props.onDragEnterEmptySpace(props.gridId)
            }
          />
          {props.dragIconIsOn ? (
            <div
              className="AsanasGridDragIcon"
              onMouseDown={props.onDragIconMouseDownAction}
              onMouseUp={props.onDragIconMouseUpAction}
            >
              <DragIndicatorIcon fontSize="large" />
            </div>
          ) : (
            ""
          )}
        </div>
      </Paper>
    </div>
  );
}
