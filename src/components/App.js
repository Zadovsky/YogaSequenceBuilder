import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AsanasPanel from "../containers/AsanasPanel";
import SchedulePanel from "../containers/SchedulePanel";
import DnDContext from "../containers/DnDContext";
import PageTop from "../containers/PageTop";
import "./App.css";

export default function App(props) {
  return (
    <React.Fragment>
      <div className="App">
        <CssBaseline />
        <DnDContext>
          <Container maxWidth="lg" style={{ height: "100%" }}>
            <Grid container spacing={3} style={{ height: "100%" }}>
              <Grid item xs={12} style={{ height: "10%" }}>
                <PageTop />
              </Grid>
              <Grid item xs={6} style={{ height: "90%" }}>
                <AsanasPanel />
              </Grid>
              <Grid item xs={6} style={{ height: "90%" }}>
                <SchedulePanel />
              </Grid>
            </Grid>
          </Container>
        </DnDContext>
      </div>
    </React.Fragment>
  );
}
