import React from "react";
import { connect } from "react-redux";
import GhostBlock from "../components/GhostBlock";
import {
  startCardDragScheduleAction,
  startCardDragAsanasAction,
} from "../actions/AsanaCardActions";
import { endDragCard } from "../actions/DnDContextActions";

function TouchDnd(props) {
  const { touchDnd, startPanelIsSchedule, startGrid, startCard } = props.touch;
  const {
    startCardDragScheduleAction,
    startCardDragAsanasAction,
    endDragCard,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchDnd);
