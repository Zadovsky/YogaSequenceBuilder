import React from "react";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import AsanaCard from "./AsanaCard";
import CardPlaceHolder from "./CardPlaceHolder";
import EmptySpaceAtTheEnd from "./EmptySpaceAtTheEnd";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./AsanasGrid.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2)
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0
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
    draggingCard,
    dragEnterAction,
    dragSourceGrid,
    ItIsSchedulePanel
  } = props;
  return asanas.map((asana, i) => {
    const asanaIndex = ItIsSchedulePanel ? i : asana.asanaIndex;

    return (
      <AsanaCard
        name={asana.asanaName[language]}
        img={asana.asanaImg}
        key={asana.cardKey}
        isDragging={
          draggingCard === null || dragSourceGrid !== gridId || !ItIsSchedulePanel
            ? false
            : i === draggingCard
        }
        ItIsSchedulePanel={ItIsSchedulePanel}
        startCardDragAction={() => {
          startCardDragAction(asanaIndex, gridId);
        }}
        dragEnterAction={() => {
          dragEnterAction(asanaIndex, gridId, ItIsSchedulePanel);
        }}
        addAsanaAction={e => {
          addAsanaAction(asanaIndex, gridId, ItIsSchedulePanel, e);
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
    dragOverCard,
    dragOverGrid,
    onDragEnterHolder,
    gridId,
    fastTransition,
    draggingCard
  } = props;

  var cardsHoldersArr = [];

  cardsArr.forEach((card, i) => {
    const placeHolder = (
      <CardPlaceHolder
        key={"ph" + i}
        fat={dragOverCard === i && dragOverGrid === gridId}
        fastTransition={fastTransition}
        isDragEnd={draggingCard == null}
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

  const onDragOverFunc = props.ItIsSchedulePanel
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
          {props.ItIsSchedulePanel ? (
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
          {props.ItIsSchedulePanel && props.enableCloseIcon ? (
            <div className="closeGridIconDiv">
              <IconButton
                className={classes.button}
                onClick={props.closeGridAction}
              >
                <CloseIcon />
              </IconButton>
            </div>
          ) : (
            ""
          )}
        </div>
      </Paper>
    </div>
  );
}
