import React from "react";
import AsanasGrid from "../components/AsanasGrid";
import GridPlaceHolder from "../components/GridPlaceHolder";

function createGridArr(props) {
  return props.cards.map((cards, i, cardsArr) => {
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
        gridId={i}
        language={props.language}
        asanas={asanas}
        draggingCard={props.draggingCard}
        dragOverCard={props.dragOverCard}
        dragOverGrid={props.dragOverGrid}
        isDragging={
          props.draggingGrid === null || !props.ItIsSchedulePanel
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
        dragSourceGrid={props.dragSourceGrid}
        dragSourcePanelIsSchedule={props.dragSourcePanelIsSchedule}
        ItIsSchedulePanel={props.ItIsSchedulePanel}
        closeCardAction={props.closeCardAction}
        closeGridAction={() => props.closeGridAction(i)}
        enableCloseIcon={i === cardsArr.length - 1 ? false : true}
        dragEnterGridAction={props.dragEnterGridAction}
      />
    );
  });
}

function createGridHolderArr(gridArr, props) {
  const {
    dragOverGrid,
    gridHeight,
    fastTransition,
    draggingGrid,
    onDragEnterGridPhAction
  } = props;

  const gridPlaceHolder = function(i) {
    return (
      <GridPlaceHolder
        key={"ph" + i}
        height={i === dragOverGrid ? gridHeight : 0}
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
