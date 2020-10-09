import React from "react";
import "./GridPlaceHolder.css";

function makeTransitionStyle(fast, DragEnd) {
  if (fast) {
    if (DragEnd) {
      return { transition: "all 0s ease 0ms" };
    } else {
      return { transition: "all 0s ease 10ms" };
    }
  } else {
    return { transition: "all 300ms ease 0ms" };
  }
}

class GridPlaceHolder extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.height > 0) {
      if (
        this.ref.current.offsetTop <
        this.ref.current.closest(".PanelFlexElement").scrollTop
      ) {
        this.ref.current.scrollIntoViewIfNeeded(true);
      } else if (
        this.ref.current.offsetTop + this.ref.current.clientHeight >
        this.ref.current.closest(".PanelFlexElement").scrollTop +
          this.ref.current.closest(".PanelFlexElement").clientHeight
      )
        this.ref.current.scrollIntoViewIfNeeded(false);
    }
  }

  render() {
    var transitionStyle = makeTransitionStyle(
      this.props.fastTransition,
      this.props.isDragEnd
    );
    transitionStyle.height = this.props.height;

    return (
      <div
        className="GridPlaceHolder"
        style={transitionStyle}
        onDragEnter={this.props.onDragEnterGridPhAction}
        ref={this.ref}
      ></div>
    );
  }
}

export default GridPlaceHolder;
