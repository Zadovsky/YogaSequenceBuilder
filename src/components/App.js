import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DnDContext from "../containers/DnDContext";
import PageTop from "../containers/PageTop";
import PanelsBlock from "../containers/PanelsBlock";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles(theme => ({
  container: {
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
          <Container maxWidth="lg" className={classes.container}>
            <div className="TopPanelsFlexBox">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <PageTop />
                </Grid>
              </Grid>
              <div className="TopPanelsFlexElement">
                <PanelsBlock />
              </div>
            </div>
          </Container>
        </DnDContext>
      </div>
    </React.Fragment>
  );
}
