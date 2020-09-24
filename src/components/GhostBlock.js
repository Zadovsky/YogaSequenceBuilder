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
    return (
      <div
        className="GhostBlock"
        dangerouslySetInnerHTML={{
          __html: this.props.target ? this.props.target.innerHTML : null,
        }}
      />
    );
  }
}
