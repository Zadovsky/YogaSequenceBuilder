import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography align="center">
        {props.logo.footerText + " "}
        <Link href={props.logo.footerLinkUrl} underline="always">
          {props.logo.footerLinkText}
        </Link>
      </Typography>
    </Paper>
  );
}

const mapStateToProps = (store) => {
  return {
    logo: store.logo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
