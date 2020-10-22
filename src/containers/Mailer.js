import React from "react";
import { connect } from "react-redux";
import { sendMailAction } from "../actions/MailerActions";

class Mailer extends React.Component {
  componentDidUpdate() {
    console.log(this.props);
    if (this.props.mailer.sent) this.props.sendMailAction();
  }

  render() {
    return null;
  }
}

const mapStateToProps = (store) => {
  return {
    mailer: store.mailer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMailAction: () => dispatch(sendMailAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mailer);
