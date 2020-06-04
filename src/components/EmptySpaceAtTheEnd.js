import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  emptySpaceAtTheEnd: {
    flex: 1,
    [theme.breakpoints.only("xl")]: { height: "220px" },
    [theme.breakpoints.only("lg")]: { height: "200px" },
    [theme.breakpoints.only("md")]: { height: "160px" },
    [theme.breakpoints.only("sm")]: { height: "200px" },
    [theme.breakpoints.only("xs")]: { height: "120px" },
  },
}));

export default function EmptySpaceAtTheEnd(props) {
  const classes = useStyles();

  return (
    <div
      className={classes.emptySpaceAtTheEnd}
      onDragEnter={props.onDragEnterEmptySpaceAction}
    ></div>
  );
}
