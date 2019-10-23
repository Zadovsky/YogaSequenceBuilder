import React from "react";
import AsanaCard from "./AsanaCard";
import PlaceHolder from "./PlaceHolder";
import "./AsanaGrid.css";

function makeCardsArr(props) {
  const {
    language,
    asanas,
    addAsanaAction,
    gridId,
    dragging,
    dragEnterAction,
    dragLeaveAction
  } = props;
  return asanas.map((asana, i) => {
    return (
      <AsanaCard
        name={asana.asanaName[language]}
        img={asana.asanaImg}
        key={asana.cardKey}
        cardPlace={i}
        gridId={gridId}
        isDragging={dragging === null ? false : i === +dragging}
        dragEnterAction={() => {
          dragEnterAction(i, gridId);
        }}
        dragLeaveAction={() => {
          dragLeaveAction(i, gridId);
        }}
        addAsanaAction={() => {
          addAsanaAction(i);
        }}
      />
    );
  });
}

function makeCardsHoldersArr(
  cardsArr,
  dragOver,
  onDragEnterHolder,
  onDragLeaveHolder,
  gridId,
  fastTransition,
  dragging
) {
  var cardsHoldersArr = [];

  cardsArr.forEach((card, i) => {
    const placeHolder = (
      <PlaceHolder
        key={"ph" + i}
        fat={dragOver === i}
        fastTransition={fastTransition}
        isDragEnd={(dragging == null)}
        onDragEnterHolder={() => onDragEnterHolder(i, gridId)}
        onDragLeaveHolder={() => onDragLeaveHolder(i, gridId)}
      />
    );
    cardsHoldersArr.push(placeHolder, card);
  });

  return cardsHoldersArr;
}

export default function AsanasGrid(props) {
  const cardsArr = makeCardsArr(props);
  const cardsHoldersArr = makeCardsHoldersArr(
    cardsArr,
    props.dragOver,
    props.onDragEnterHolder,
    props.onDragLeaveHolder,
    props.gridId,
    props.fastTransition,
    props.dragging
  );

  return (
    <div className="AsanaGrid" onDragLeave={props.onDragLeaveGrid}>
      {cardsHoldersArr}
    </div>
  );
}
