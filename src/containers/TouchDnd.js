import React from "react";
import { connect } from "react-redux";
import GhostBlock from "../components/GhostBlock";
import {
  startCardDragScheduleAction,
  startCardDragAsanasAction,
  dragEnterAction,
} from "../actions/AsanaCardActions";
import { dragEnterCard, endDragCard } from "../actions/DnDContextActions";
import { mountGhostBlockAction } from "../actions/GhostBlockActions";

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
    dragEnterAction,
    dragEnterCard,
    mountGhostBlockAction,
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
    dragEnterAction: (cardPlace, gridId) =>
      dispatch(dragEnterAction(cardPlace, gridId)),
    dragEnterCard: (e) => dispatch(dragEnterCard(e)),
    mountGhostBlockAction: (ref) => dispatch(mountGhostBlockAction(ref)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchDnd);
