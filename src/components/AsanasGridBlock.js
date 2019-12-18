import React from "react";
import AsanasGrid from "../components/AsanasGrid";
import GridPlaceHolder from "../components/GridPlaceHolder";

function createGridArr(props) {
  return props.cards.map((cards, i) => {
    const asanas = cards.gridCards.map(card => {
      return {
        ...props.asanas[card.asanaIndex],
        asanaIndex: card.asanaIndex,
        cardKey: card.cardKey
      };
    });

    return (
      <AsanasGrid
        key={cards.gridKey}
        gridId={props.removableCards ? i : "ASANAS"}
        language={props.language}
        asanas={asanas}
        dragging={props.dragging}
        dragOver={props.dragOver}
        dragOverGrid={props.dragOverGrid}
        isDragging={
          props.draggingGrid === null || !props.removableCards
            ? false
            : i === props.draggingGrid
        }
        fastTransition={props.fastTransition}
        startCardDragAction={props.startCardDragAction}
        startGridDragAction={props.startGridDragAction}
        onDragIconMouseDownAction={props.onDragIconMouseDownAction}
        onDragIconMouseUpAction={props.onDragIconMouseUpAction}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        dragSource={props.dragSource}
        removableCards={props.removableCards}
        closeCardAction={props.closeCardAction}
        dragEnterGridAction={props.dragEnterGridAction}
      />
    );
  });
}

function createGridHolderArr(gridArr, props) {
  const {
    dragGridOverGrid,
    gridHeight,
    fastTransition,
    draggingGrid,
    onDragEnterGridPhAction
  } = props;

  const gridPlaceHolder = function(i) {
    return (
      <GridPlaceHolder
        key={"ph" + i}
        height={i === dragGridOverGrid ? gridHeight : 0}
        fastTransition={fastTransition}
        isDragEnd={draggingGrid == null}
        onDragEnterGridPhAction={onDragEnterGridPhAction}
      />
    );
  };

  var gridHoldersArr = [];

  gridArr.forEach((grid, i) => {
    gridHoldersArr.push(gridPlaceHolder(i), grid);
  });
  gridHoldersArr.push(gridPlaceHolder(gridArr.length));

  return gridHoldersArr;
}

export default function AsanasGridBlock(props) {
  const gridArr = createGridArr(props);
  const gridHoldersArr = createGridHolderArr(gridArr, props);

  return <div className="AsanaGridBlock">{gridHoldersArr}</div>;
}
