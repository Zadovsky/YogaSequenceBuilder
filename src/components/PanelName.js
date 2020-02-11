import React from "react";
import "./PanelName.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 1)
  }
}));

export default function PanelName(props) {
  const classes = useStyles();
  return (
    <Typography
      variant="h6"
      component="p"
      align="center"
      className={classes.root}
    >
      {props.name}
    </Typography>
  );
}
