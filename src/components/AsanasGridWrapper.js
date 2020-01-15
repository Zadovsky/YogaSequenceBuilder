import React from "react";
import "./AsanasGridWrapper.css";

class AsanasGridWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.scrollIntoView) {
      this.ref.current.scrollIntoView();
    }
  }

  render() {
    return (
      <div className="AsanasGridWrapper" ref={this.ref}>
        {this.props.children}
      </div>
    );
  }
}

export default AsanasGridWrapper;
