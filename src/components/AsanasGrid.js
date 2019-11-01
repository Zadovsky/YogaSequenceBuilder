import React from "react";
import AsanaCard from "./AsanaCard";
import PlaceHolder from "./PlaceHolder";
import EmptySpaceAtTheEnd from "./EmptySpaceAtTheEnd";
import "./AsanaGrid.css";

function makeCardsArr(props) {
  const {
    language,
    asanas,
    addAsanaAction,
    gridId,
    dragging,
    dragEnterAction,
    dragSource,
    removableCards
  } = props;
  return asanas.map((asana, i) => {
    return (
      <AsanaCard
        name={asana.asanaName[language]}
        img={asana.asanaImg}
        key={asana.cardKey}
        cardPlace={i}
        gridId={gridId}
        isDragging={
          dragging === null || dragSource !== gridId || !removableCards
            ? false
            : i === +dragging
        }
        removableCards={removableCards}
        dragEnterAction={() => {
          dragEnterAction(i, gridId);
        }}
        addAsanaAction={() => {
          addAsanaAction(i, gridId);
        }}
      />
    );
  });
}

function makeCardsHoldersArr(cardsArr, props) {
  const {
    dragOver,
    onDragEnterHolder,
    gridId,
    fastTransition,
    dragging
  } = props;

  var cardsHoldersArr = [];

  cardsArr.forEach((card, i) => {
    const placeHolder = (
      <PlaceHolder
        key={"ph" + i}
        fat={dragOver === i}
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
  const cardsArr = makeCardsArr(props);
  const cardsHoldersArr = makeCardsHoldersArr(cardsArr, props);

  return (
    <div className="AsanaGrid">
      {cardsHoldersArr}
      <EmptySpaceAtTheEnd
        onDragEnterEmptySpace={() => props.onDragEnterEmptySpace(props.gridId)}
        removableCards={props.removableCards}
      />
    </div>
  );
}
