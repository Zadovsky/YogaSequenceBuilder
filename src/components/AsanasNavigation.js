import React from "react";
import Chip from "@material-ui/core/Chip";
import "./AsanasNavigation.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  asanasNavigation: {
    margin: theme.spacing(1.5, -0.5, 0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
    color: "black",
  },
}));

export default function AsanasNavigation(props) {
  const classes = useStyles();

  const menuItems = props.groups.map((group) => {
    return (
      <Chip
        variant="outlined"
        color="secondary"
        key={group.id}
        label={group.name}
        className={classes.chip}
        onClick={() => {
          props.onClick(group.id);
        }}
      />
    );
  });

  return <div className={classes.asanasNavigation}>{menuItems}</div>;
}
