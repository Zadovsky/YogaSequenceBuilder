import React from "react";
import AsanasGrid from "../components/AsanasGrid";
import GridPlaceHolder from "../components/GridPlaceHolder";
import "./AsanasGridBlock.css";

function createGridArr(props) {
  return props.cards.map((cards, i, cardsArr) => {
    const asanas = cards.gridCards.map((card) => {
      return {
        ...props.asanas[card.asanaIndex],
        asanaIndex: card.asanaIndex,
        cardKey: card.cardKey,
      };
    });

    return (
      <AsanasGrid
        key={cards.gridKey}
        name={cards.gridName === null ? props.gridDefaultName : cards.gridName}
        gridId={i}
        asanas={asanas}
        draggingCard={props.draggingCard}
        dragOverCard={props.dragOverCard}
        dragOverGrid={props.dragOverGrid}
        isDragging={
          props.draggingGrid === null || !props.itIsSchedulePanel
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
        onDragEnterEmptySpaceAction={props.onDragEnterEmptySpaceAction}
        onDragEnterHolderAction={props.onDragEnterHolderAction}
        dragSourceGrid={props.dragSourceGrid}
        dragSourcePanelIsSchedule={props.dragSourcePanelIsSchedule}
        itIsSchedulePanel={props.itIsSchedulePanel}
        closeCardAction={props.closeCardAction}
        closeGridAction={() => props.closeGridAction(i)}
        enableCloseIcon={i === cardsArr.length - 1 ? false : true}
        dragEnterGridAction={props.dragEnterGridAction}
        onChangeGridNameAction={props.onChangeGridNameAction}
        onBlurGridNameAction={props.onBlurGridNameAction}
        scrollIntoView={cards.gridKey === props.selectedGroupId}
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
    onDragEnterGridPhAction,
  } = props;

  const gridPlaceHolder = function (i) {
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

  return <div className="AsanasGridBlock">{gridHoldersArr}</div>;
}
