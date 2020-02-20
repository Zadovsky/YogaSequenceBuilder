import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import "./SignInPopUpWindow.css";

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(2, 0, 0),
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
}));

export default function SignInPopUpWindow(props) {
  const classes = useStyles();

  return (
    <Dialog open={true} onClose={() => {}}>
      <DialogTitle>Вход в аккаунт</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Ваш e-mail"
          type="email"
          fullWidth
        />
        <TextField margin="dense" label="Пароль" type="password" fullWidth />
        <Link
          component="button"
          variant="body2"
          onClick={() => {}}
          className={classes.link}
        >
          Забыли пароль?
        </Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClickCancelSignInAction} color="primary">
          Отмена
        </Button>
        <Button onClick={() => {}} color="primary">
          Вход
        </Button>
      </DialogActions>
    </Dialog>
  );
}