import React from "react";
import { connect } from "react-redux";
import AppSpace from "../components/AppSpace";
import { onAppConstruction } from "../actions/AppActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    props.onAppConstruction();
  }

  render() {
    return (
      <React.Fragment>
        <AppSpace />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAppConstruction: () => dispatch(onAppConstruction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
