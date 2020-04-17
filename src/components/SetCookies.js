import React from "react";

export default class SetCookies extends React.Component {
  componentDidUpdate() {
    if (this.props.setCookies) {
      this.props.onSetCookiesAction();
    }
  }

  render() {
    return "";
  }
}
