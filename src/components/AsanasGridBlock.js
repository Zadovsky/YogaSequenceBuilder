import React from "react";
import AsanasGrid from "../components/AsanasGrid";
import ScheduleSectionsSeparator from "../components/ScheduleSectionsSeparator";

function createGridArr(props) {
  return props.cards.map((cards, i) => {
    const asanas = cards.gridCards.map(card => {
      return { ...props.asanas[card.asanaIndex], cardKey: card.cardKey };
    });

    return (
      <AsanasGrid
        key={cards.gridKey}
        gridId={props.gridIdPrefx === "ASANAS" ? "ASANAS" : i}
        language={props.language}
        asanas={asanas}
        dragging={props.dragging}
        dragOver={props.dragOver}
        dragOverGrid={props.dragOverGrid}
        fastTransition={props.fastTransition}
        startDragAction={props.startDragAction}
        addAsanaAction={props.addAsanaAction}
        dragEnterAction={props.dragEnterAction}
        onDragEnterEmptySpace={props.onDragEnterEmptySpace}
        onDragEnterHolder={props.onDragEnterHolder}
        dragSource={props.dragSource}
        removableCards={props.removableCards}
        closeCardAction={props.closeCardAction}
      />
    );
  });
}

function createGridSepArr(gridArr) {
  var gridSepArr = [];
  gridArr.forEach((grid, i) => {
    if (i > 0) {
      gridSepArr.push(<ScheduleSectionsSeparator key={"sep" + i} />);
    }
    gridSepArr.push(grid);
  });
  return gridSepArr;
}

export default function AsanasGridBlock(props) {
  const gridArr = createGridArr(props);
  const gridSepArr = createGridSepArr(gridArr);

  return <div className="AsanaGridBlock">{gridSepArr}</div>;
}
