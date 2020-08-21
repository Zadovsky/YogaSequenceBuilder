import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  userIcon: {
    [theme.breakpoints.up("md")]: {
      width: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "16px",
    },
    marginRight: theme.spacing(1),
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.73rem",
    },
  },
}));

export default function UserMenu(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className="UserMenu">
      <Button
        onClick={props.usernameClickAction}
        size={useMediaQuery(theme.breakpoints.up("md")) ? "medium" : "small"}
        className={classes.button}
      >
        <img src="/img/user.png" alt="user" className={classes.userIcon} />
        {props.login}
      </Button>
      <Menu
        anchorEl={props.anchorEl}
        open={props.isOpen}
        keepMounted
        onClose={props.userMenuClose}
      >
        <MenuItem key={0} onClick={props.changePwdItemClickAction}>
          {props.texts.cnangePwd}
        </MenuItem>
        <MenuItem key={1} onClick={props.exitItemClickAction}>
          {props.texts.exit}
        </MenuItem>
      </Menu>
    </div>
  );
}
