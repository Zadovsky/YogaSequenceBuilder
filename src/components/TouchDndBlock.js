import React from "react";

export default class TouchDndBlock extends React.Component {
  componentDidMount() {
    const { startCardDragAction, draggingCard, dragSourceGrid } = this.props;
    startCardDragAction(draggingCard, dragSourceGrid);
  }

  render() {
    return null;
  }
}
