import React from "react";
import "./GhostBlock.css";

export default class GhostBlock extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const {
      startCardDragScheduleAction,
      startCardDragAsanasAction,
      startPanelIsSchedule,
      startCard,
      startGrid,
      mountGhostBlockAction,
    } = this.props;

    if (startPanelIsSchedule) {
      startCardDragScheduleAction(startCard, startGrid);
    } else startCardDragAsanasAction(startCard, startGrid);

    mountGhostBlockAction(this.ref);
  }

  componentWillUnmount() {
    this.props.endDragCard();
  }

  componentDidUpdate() {
    const { moveOnEl, dragEnterAction, dragEnterCard } = this.props;

    if (moveOnEl) {
      if (moveOnEl.closest(".AsanaCard")) {
        const { cardplace, gridid, itisschedulepanel } = moveOnEl.closest(
          ".AsanaCard"
        ).dataset;
        if (itisschedulepanel === "true") dragEnterAction(+cardplace, +gridid);
      } else {
        dragEnterCard({ target: moveOnEl });
      }
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
          ref={this.ref}
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
