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
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";
import grey from "@material-ui/core/colors/grey";
import orange from "@material-ui/core/colors/orange";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "50vh",
    },
  },
}));

const customTheme = createMuiTheme({
  palette: {
    secondary: {
      main: pink[500],
    },
    primary: grey,
    error: {
      main: orange[600],
    },
  },
});

export default function App(props) {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const gridContainerProps = { spacing: isSmallScreen ? 1 : 2 };
  const containerProps = { disableGutters: isSmallScreen ? true : false };

  return (
    <React.Fragment>
      <ReadCookies />
      <CssBaseline />
      <MuiThemeProvider theme={customTheme}>
        <DnDContext>
          <Container maxWidth="lg" {...containerProps}>
            <Grid container {...gridContainerProps}>
              <Grid item xs={12}>
                <PageTop />
              </Grid>
              <Grid item sm={6} className={classes.grid}>
                <div className="PanelListWrapper">
                  <AsanasPanel />
                  <SequencesList />
                </div>
              </Grid>
              <Grid item sm={6} className={classes.grid}>
                <SchedulePanel />
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </Container>
        </DnDContext>
        <UserPopUpWindows />
        <InfoPopUpWindow />
        <YesNoPopUpWindow />
      </MuiThemeProvider>
    </React.Fragment>
  );
}
