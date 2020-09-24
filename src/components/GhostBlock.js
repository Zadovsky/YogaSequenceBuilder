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
    const { target } = this.props;
    const rect = target ? target.getBoundingClientRect() : null;

    return (
      <div
        className="GhostBlock"
        style={
          target
            ? {
                width: target.offsetWidth,
                height: target.offsetHeigh,
                top: rect.top,
                left: rect.left,
              }
            : null
        }
        dangerouslySetInnerHTML={{
          __html: target ? target.innerHTML : null,
        }}
      />
    );
  }
}
