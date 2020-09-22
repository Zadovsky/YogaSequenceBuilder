import React from "react";
import "./PanelFlexElement.css";

class PanelFlexElement extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    const { touchDY, touchScrollDoneAction } = this.props;
    if (touchDY !== 0) {
      this.ref.current.scrollBy(0, touchDY);
      // touchScrollDoneAction();
    }
  }

  render() {
    return (
      <div
        className="PanelFlexElement"
        onScroll={this.props.onGridBlockScroll}
        ref={this.ref}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PanelFlexElement;
