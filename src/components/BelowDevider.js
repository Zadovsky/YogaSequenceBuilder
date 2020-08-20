import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, useMediaQuery } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
  gridItem: {
    width: "100%",
  },
  h1: {
    padding: theme.spacing(2),
  },
  h2: {},
  instruction: {
    padding: theme.spacing(1, 2),
    textAlign: "justify",
  },
  li: {
    paddingLeft: theme.spacing(5),
    background: "url(img/om.png) no-repeat 16px",
    backgroundSize: "16px",
  },
  paper: {
    backgroundColor: yellow[50],
  },
  textField: {
    margin: theme.spacing(1, 2, 1),
  },
}));

const styles = {
  resize: { fontSize: "1.5rem" },
};

export default function BelowDevider(props) {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const containerProps = { spacing: isSmallScreen ? 1 : 2 };

  return (
    <Grid container {...containerProps} className={classes.gridContainer}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          className={classes.h1}
        >
          {props.headerText}
        </Typography>
      </Grid>
      <Grid item md={6} className={classes.gridItem}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.textField}
            value={props.whatItIsText.title}
            inputProps={{
              readOnly: true,
              style: styles.resize,
            }}
          />
          <Typography variant="body1" className={classes.instruction}>
            {props.whatItIsText.text}
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={6} className={classes.gridItem}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.textField}
            value={props.howItWorksText.title}
            inputProps={{
              readOnly: true,
              style: styles.resize,
            }}
          />
          <List disablePadding={true}>
            {props.howItWorksText.texts.map((text, i) => {
              return (
                <ListItem key={i} className={classes.li}>
                  <ListItemText>{text}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
