import React from "react";

export default class TouchDndBlock extends React.Component {
  componentDidMount() {
    const {
      startCardDragScheduleAction,
      startCardDragAsanasAction,
      dragSourcePanelIsSchedule,
      draggingCard,
      dragSourceGrid,
    } = this.props;

    if (dragSourcePanelIsSchedule) {
      startCardDragScheduleAction(draggingCard, dragSourceGrid);
    } else startCardDragAsanasAction(draggingCard, dragSourceGrid);
  }

  render() {
    return null;
  }
}
