import React from "react";
import "./GhostBlock.css";

export default class GhostBlock extends React.Component {
  componentDidMount() {
    const {
      startCardDragScheduleAction,
      startCardDragAsanasAction,
      startPanelIsSchedule,
      startCard,
      startGrid,
    } = this.props;

    if (startPanelIsSchedule) {
      startCardDragScheduleAction(startCard, startGrid);
    } else startCardDragAsanasAction(startCard, startGrid);
  }

  componentWillUnmount() {
    this.props.endDragCard();
  }

  componentDidUpdate() {
    const { moveOnEl, dragEnterAction, dragEnterCard } = this.props;

    if (moveOnEl.closest(".AsanaCard")) {
      const { cardplace, gridid, itisschedulepanel } = moveOnEl.closest(
        ".AsanaCard"
      ).dataset;
      if (itisschedulepanel === "true") dragEnterAction(+cardplace, +gridid);
    } else {
      dragEnterCard({ target: moveOnEl });
    }
  }

  render() {
    const {
      target,
      targetWidth,
      targetHeight,
      targetTop,
      targetLeft,
      dX,
      dY,
    } = this.props;

    if (target) {
      return (
        <div
          className="GhostBlock"
          style={{
            width: targetWidth,
            height: targetHeight,
            top: targetTop + dY,
            left: targetLeft + dX,
          }}
          dangerouslySetInnerHTML={{
            __html: target.innerHTML,
          }}
        />
      );
    } else return null;
  }
}
