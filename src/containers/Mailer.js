import React from "react";
import { connect } from "react-redux";
import { sendMailAction } from "../actions/MailerActions";

class Mailer extends React.Component {
  componentDidUpdate() {
    const { sent, email, texts } = this.props.mailer;
    const { curLang } = this.props.language;
    if (sent)
      this.props.sendMailAction(
        email,
        texts[curLang].subj,
        texts[curLang].text
      );
  }

  render() {
    return null;
  }
}

const mapStateToProps = (store) => {
  return {
    mailer: store.mailer,
    language: store.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMailAction: (email, subj, text) =>
      dispatch(sendMailAction(email, subj, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mailer);
