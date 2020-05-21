import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles((theme) => ({
  h1: {
    padding: theme.spacing(3, 2, 2),
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
  paperLeft: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: yellow[50],
  },
  paperRight: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
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

  return (
    <Grid container spacing={2}>
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
