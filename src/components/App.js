import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AsanasPanel from "../containers/AsanasPanel";
import SchedulePanel from "../containers/SchedulePanel";
import DnDContext from "../containers/DnDContext";
import "./App.css";

export default function App(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <DnDContext>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <AsanasPanel />
            </Grid>
            <Grid item xs={6}>
              <SchedulePanel />
            </Grid>
          </Grid>
        </Container>
      </DnDContext>
    </React.Fragment>
  );
}
