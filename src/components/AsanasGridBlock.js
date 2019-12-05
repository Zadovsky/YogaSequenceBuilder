import React from "react";
import AsanasGrid from "../components/AsanasGrid";

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
      />
    );
  });
}

export default function AsanasGridBlock(props) {
  const gridArr = createGridArr(props);

  return <div className="AsanaGridBlock">{gridArr}</div>;
}
