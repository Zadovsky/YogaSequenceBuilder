import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AsanasPanel from "../containers/AsanasPanel";
import SchedulePanel from "../containers/SchedulePanel";
import SequencesList from "../containers/SequencesList";
import DnDContext from "../containers/DnDContext";
import PageTop from "../containers/PageTop";
import Footer from "../containers/Footer";
import UserPopUpWindows from "../containers/UserPopUpWindows";
import ReadCookies from "../containers/ReadCookies";
import InfoPopUpWindow from "../containers/InfoPopUpWindow";
import YesNoPopUpWindow from "../containers/YesNoPopUpWindow";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100vh",
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: pink[500],
    },
  },
});

export default function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ReadCookies />
      <CssBaseline />
      <DnDContext>
        <MuiThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <PageTop />
              </Grid>
              <Grid item xs={6} className={classes.grid}>
                <div className="PanelListWrapper">
                  <AsanasPanel />
                  <SequencesList />
                </div>
              </Grid>
              <Grid item xs={6} className={classes.grid}>
                <SchedulePanel />
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </Container>
        </MuiThemeProvider>
      </DnDContext>
      <UserPopUpWindows />
      <InfoPopUpWindow />
      <YesNoPopUpWindow />
    </React.Fragment>
  );
}
