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

  render() {
    const {
      target,
      targetWidth,
      targetHeight,
      targetTop,
      targetLeft,
    } = this.props;

    if (target) {
      return (
        <div
          className="GhostBlock"
          style={{
            width: targetWidth,
            height: targetHeight,
            top: targetTop,
            left: targetLeft,
          }}
          dangerouslySetInnerHTML={{
            __html: target.innerHTML,
          }}
        />
      );
    } else return null;
  }
}
