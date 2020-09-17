import React from "react";

export default class TouchDndBlock extends React.Component {
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

  render() {
    return null;
  }
}
