import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h1: {
    padding: theme.spacing(1, 2, 0),
  },
  h2: {},
  instruction: {
    padding: theme.spacing(1, 2),
  },
}));

export default function BelowDevider(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
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
      <Grid item xs={6}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          className={classes.h2}
        >
          {props.whatItIsText.title}
        </Typography>
        <Typography variant="body1" className={classes.instruction}>
          {props.whatItIsText.text}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          className={classes.h2}
        >
          {props.howItWorksText.title}
        </Typography>
        {props.howItWorksText.texts.map((text, i) => {
          return (
            <Typography key={i} variant="body1" className={classes.instruction}>
              {text}
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
}
