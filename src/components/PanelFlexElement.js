import React from "react";
import "./PanelFlexElement.css";
import clsx from "clsx";

class PanelFlexElement extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    const { touchDY } = this.props;
    if (touchDY !== 0) {
      this.ref.current.scrollBy(0, touchDY);
    }
  }

  render() {
    const { touchDnd } = this.props;
    console.log(touchDnd);
    return (
      <div
        className={clsx(
          "PanelFlexElement",
          touchDnd === null && "PanelFlexElementSmooth"
        )}
        onScroll={this.props.onGridBlockScroll}
        ref={this.ref}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PanelFlexElement;
