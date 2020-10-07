import React from "react";
import { connect } from "react-redux";
import GhostBlock from "../components/GhostBlock";
import {
  startCardDragScheduleAction,
  startCardDragAsanasAction,
  dragEnterAction,
} from "../actions/AsanaCardActions";
import {
  dragEnterCard,
  endDragCard,
  endDragGrid,
} from "../actions/DnDContextActions";
import { mountGhostBlockAction } from "../actions/GhostBlockActions";
import { onDragEnterHolderAction } from "../actions/PlaceHolderActions";
import { onDragEnterEmptySpaceAction } from "../actions/EmptySpaceAtTheEndActions";
import {
  dragEnterGridCardAction,
  dragEnterGridGridAction,
  startGridDragAction,
} from "../actions/AsanasGridActions";

function TouchDnd(props) {
  const {
    touchDnd,
    startPanelIsSchedule,
    startGrid,
    startCard,
    target,
    targetWidth,
    targetHeight,
    targetTop,
    targetLeft,
    startX,
    startY,
    moveX,
    moveY,
    moveOnEl,
  } = props.touch;
  const {
    startCardDragScheduleAction,
    startCardDragAsanasAction,
    endDragCard,
    endDragGrid,
    dragEnterAction,
    dragEnterCard,
    mountGhostBlockAction,
    onDragEnterHolderAction,
    onDragEnterEmptySpaceAction,
    dragEnterGridCardAction,
    startGridDragAction,
    dragEnterGridGridAction,
  } = props;

  return (
    touchDnd && (
      <GhostBlock
        startCardDragScheduleAction={startCardDragScheduleAction}
        startCardDragAsanasAction={startCardDragAsanasAction}
        startPanelIsSchedule={startPanelIsSchedule}
        startGrid={startGrid}
        startCard={startCard}
        endDragCard={endDragCard}
        endDragGrid={endDragGrid}
        target={target}
        targetWidth={targetWidth}
        targetHeight={targetHeight}
        targetTop={targetTop}
        targetLeft={targetLeft}
        dX={moveX - startX}
        dY={moveY - startY}
        moveOnEl={moveOnEl}
        dragEnterAction={dragEnterAction}
        dragEnterCard={dragEnterCard}
        mountGhostBlockAction={mountGhostBlockAction}
        onDragEnterHolderAction={onDragEnterHolderAction}
        onDragEnterEmptySpaceAction={onDragEnterEmptySpaceAction}
        dragEnterGridCardAction={dragEnterGridCardAction}
        startGridDragAction={startGridDragAction}
        dragEnterGridGridAction={dragEnterGridGridAction}
      />
    )
  );
}

const mapStateToProps = (store) => {
  return {
    touch: store.touch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startCardDragScheduleAction: (asanaId, gridId) =>
      dispatch(startCardDragScheduleAction(asanaId, gridId)),
    startCardDragAsanasAction: (asanaId, gridId) =>
      dispatch(startCardDragAsanasAction(asanaId, gridId)),
    endDragCard: () => dispatch(endDragCard()),
    endDragGrid: () => dispatch(endDragGrid()),
    dragEnterAction: (cardPlace, gridId) =>
      dispatch(dragEnterAction(cardPlace, gridId)),
    dragEnterCard: (e) => dispatch(dragEnterCard(e)),
    mountGhostBlockAction: (ref) => dispatch(mountGhostBlockAction(ref)),
    onDragEnterHolderAction: () => dispatch(onDragEnterHolderAction()),
    onDragEnterEmptySpaceAction: (gridId) =>
      dispatch(onDragEnterEmptySpaceAction(gridId)),
    dragEnterGridCardAction: (gridId) =>
      dispatch(dragEnterGridCardAction(gridId)),
    dragEnterGridGridAction: (gridId) =>
      dispatch(dragEnterGridGridAction(gridId)),
    startGridDragAction: (gridId, e) =>
      dispatch(startGridDragAction(gridId, e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchDnd);
