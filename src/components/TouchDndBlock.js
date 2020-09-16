import React from "react";

export default class TouchDndBlock extends React.Component {
  componentDidMount() {
    this.props.startCardDragAction(0, 0);
  }

  render() {
    return null;
  }
}
