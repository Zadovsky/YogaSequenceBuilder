import React from "react";
import AsanasPanel from "../containers/AsanasPanel";
import SchedulePanel from "../containers/SchedulePanel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    height: "100%"
  }
}));

export default function PanelsBlock(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={6} className={classes.grid}>
        <AsanasPanel />
      </Grid>
      <Grid item xs={6} className={classes.grid}>
        <SchedulePanel />
      </Grid>
    </Grid>
  );
}
