import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AsanasGrid from "../components/AsanasGrid";
import { addAsanaAction } from "../actions/AsanaCardActions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function AsanasPanel(props) {
  const classes = useStyles();
  const asanas = props.asanas.map((asana, i) => {
    return { ...asana, cardKey: i };
  });

  return (
    <Paper className={classes.root}>
      <AsanasGrid
        gridId="ASANAS"
        language={props.language}
        asanas={asanas}
        addAsanaAction={props.addAsanaAction}
      />
    </Paper>
  );
}

const mapStateToProps = store => {
  return {
    language: store.language,
    asanas: store.asanas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAsanaAction: asanaId => dispatch(addAsanaAction(asanaId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsanasPanel);
