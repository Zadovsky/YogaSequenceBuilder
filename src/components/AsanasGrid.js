import React from "react";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AsanaCard from "./AsanaCard";
import CardPlaceHolder from "./CardPlaceHolder";
import EmptySpaceAtTheEnd from "./EmptySpaceAtTheEnd";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./AsanasGrid.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2),
    position: "relative"
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0
  },
  textField: {
    margin: theme.spacing(1)
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
    dragSourcePanelIsSchedule,
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
          draggingCard === null ||
          dragSourceGrid !== gridId ||
          !ItIsSchedulePanel ||
          !dragSourcePanelIsSchedule
            ? false
            : i === draggingCard
        }
        ItIsSchedulePanel={ItIsSchedulePanel}
        startCardDragAction={() => {
          startCardDragAction(asanaIndex, gridId, ItIsSchedulePanel);
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
  const {
    gridId,
    name,
    language,
    isDragging,
    ItIsSchedulePanel,
    startGridDragAction,
    dragEnterGridAction,
    onDragEnterEmptySpace,
    onDragIconMouseUpAction,
    onDragIconMouseDownAction,
    enableCloseIcon,
    closeGridAction
  } = props;
  const cardsArr = makeCardsArr(props);
  const cardsHoldersArr = makeCardsHoldersArr(cardsArr, props);

  const onDragOverFunc = ItIsSchedulePanel
    ? e => {
        e.preventDefault();
      }
    : () => {};

  var classArr = ["AsanasGridDraggable"];
  if (isDragging) classArr.push("AsanaGridDragging");
  const classStr = classArr.join(" ");

  return (
    <div
      className={classStr}
      draggable="true"
      onDragStart={e => {
        startGridDragAction(gridId, e);
      }}
      onDragEnter={() => dragEnterGridAction(gridId)}
      onDragOver={onDragOverFunc}
    >
      <Paper className={classes.root}>
        <TextField
          className={classes.textField}
          defaultValue={ItIsSchedulePanel ? "Без названия" : name[language]}
          InputProps={{
            readOnly: ItIsSchedulePanel ? false : true
          }}
        />
        <div className="AsanasGrid">
          {cardsHoldersArr}
          <EmptySpaceAtTheEnd
            onDragEnterEmptySpace={() =>
              onDragEnterEmptySpace(gridId, ItIsSchedulePanel)
            }
          />
        </div>
        {ItIsSchedulePanel && enableCloseIcon ? (
          <div className="closeGridIconDiv">
            <IconButton className={classes.button} onClick={closeGridAction}>
              <CloseIcon />
            </IconButton>
          </div>
        ) : (
          ""
        )}
        {ItIsSchedulePanel ? (
          <div
            className="AsanasGridDragIcon"
            onMouseDown={onDragIconMouseDownAction}
            onMouseUp={onDragIconMouseUpAction}
          >
            <DragIndicatorIcon fontSize="large" />
          </div>
        ) : (
          ""
        )}
      </Paper>
    </div>
  );
}
