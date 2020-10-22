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
import CheckLang from "../containers/CheckLang";
import InfoPopUpWindow from "../containers/InfoPopUpWindow";
import YesNoPopUpWindow from "../containers/YesNoPopUpWindow";
import TouchDnd from "../containers/TouchDnd";
import IntroWindow from "../containers/IntroWindow";
import Mailer from "../containers/Mailer";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";
import grey from "@material-ui/core/colors/grey";
import orange from "@material-ui/core/colors/orange";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    overflow: "hidden",
  },
  appFlexBox: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  panelsFlexElement: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    flexGrow: 3,
    margin: theme.spacing(1, -1),
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0.5, -1),
    },
  },
  panelListWrapper: {
    position: "relative",
    height: "100%",
  },
  gridContainer: {
    height: "100%",
  },
  grid: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "50%",
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
  const containerProps = { disableGutters: isSmallScreen ? true : false };

  return (
    <React.Fragment>
      <CheckLang />
      <ReadCookies />
      <CssBaseline />
      <MuiThemeProvider theme={customTheme}>
        <DnDContext>
          <Container
            maxWidth="lg"
            className={classes.container}
            {...containerProps}
          >
            <div className={classes.appFlexBox}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <PageTop />
                </Grid>
              </Grid>
              <div className={classes.panelsFlexElement}>
                <Grid container className={classes.gridContainer} spacing={1}>
                  <Grid item sm={6} className={classes.grid}>
                    <div className={classes.panelListWrapper}>
                      <AsanasPanel />
                      <SequencesList />
                    </div>
                  </Grid>
                  <Grid item sm={6} className={classes.grid}>
                    <SchedulePanel />
                  </Grid>
                </Grid>
              </div>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Footer />
                </Grid>
              </Grid>
            </div>
          </Container>
        </DnDContext>
        <UserPopUpWindows />
        <InfoPopUpWindow />
        <YesNoPopUpWindow />
        <IntroWindow />
        <TouchDnd />
        <Mailer />
      </MuiThemeProvider>
    </React.Fragment>
  );
}
