import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AsanasPanel from "../containers/AsanasPanel";
import SchedulePanel from "../containers/SchedulePanel";
import DnDContext from "../containers/DnDContext";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  }
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="App">
        <CssBaseline />
        <DnDContext>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3} className={classes.root}>
              <Grid item xs={6} className={classes.root}>
                <AsanasPanel />
              </Grid>
              <Grid item xs={6} className={classes.root}>
                <SchedulePanel />
              </Grid>
            </Grid>
          </Container>
        </DnDContext>
      </div>
    </React.Fragment>
  );
}
