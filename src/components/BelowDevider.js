import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  h1: {
    padding: theme.spacing(2, 2, 0),
  },
  h2: {},
  instruction: {
    padding: theme.spacing(1, 2),
  },
  li: {
    paddingLeft: theme.spacing(5),
    background: "url(img/om.png) no-repeat 16px",
    backgroundSize: "16px",
  },
  paperLeft: {
    marginLeft: theme.spacing(1),
  },
  paperRight: {
    marginRight: theme.spacing(1),
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
        <Paper className={classes.paperLeft}>
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
      <Grid item xs={6}>
        <Paper className={classes.paperRight}>
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
